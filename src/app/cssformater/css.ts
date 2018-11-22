import { TriggerState, TriggerTransition } from './../model/animation.model';
import { Injectable } from '@angular/core';
import { animation, animate, keyframes, style } from "@angular/animations";
import { Trigger } from '../model/animation.model';
import * as CSSOM from "cssom";




/**
 * @description 将字符串转化为进度数组
 * @author cyia
 * @date 2018-10-20
 * @param str
 */
function transfromProgress(str: string) {
    return str
        .split(',')
        .filter(val => val)
        .map((val) => {
            switch (val) {
                case 'from':
                    return '0'
                case 'to':
                    return '1'
                default:
                    return (+val.replace('%', '')) / 100 + ''
            }
        })
}

/**转化为小驼峰法 */
function transfromPropertyName(name: string): string {
    let propertyNameArray = name.split('');
    for (let i = 0; i < propertyNameArray.length; i++) {
        const letter = propertyNameArray[i];
        if (!/-/.test(letter)) continue;
        propertyNameArray.splice(i, 1)
        propertyNameArray[i] = propertyNameArray[i].toLocaleUpperCase()

    }
    return propertyNameArray.join('')
}

export interface CssType {
    file?: File;
    content?: string
}

@Injectable()
export class Css2TsService {
    cssRaw: string;
    tsRaw: string;
    /**保存的是处理之前的css数组 */
    array: CSSKeyframesRule[];
    /**关键帧常量字符串数组 */
    animationArray: any[] = [];
    /**组成真正能用的动画 */
    triggerList: Trigger[] = []
    /**
     * @description 关键帧对象,
     * @memberof Css2Ts
     */
    keyframeObject: { [name: string]: { [name: string]: any[] } } = {};
    cssFile: File;
    tsFile: File
    cssStyleSheet: CSSStyleSheet;

    private cssType: CssType = {}
    constructor() {
        // if (cssType.file) this.cssFile = cssType.file

    }

    /**
     * @description 通过文件拿到css
     * @author cyia
     * @date 2018-11-17
     * @param file
     * @memberof Css2TsService
     */
    setFile(file: File) {
        this.cssType.file = file
        console.log(this.cssType.file)
    }
    async init() {
        await this.getCssContent(this.cssType);
        this.parse().cssFilter().cssMerge()
            .arrayToTs()
            .addTsHeader().toFile();
        return this;
    }
    /**
     * @description 获得css的内容,纯文本
     * @author cyia
     * @date 2018-11-08
     * @param cssType
     * @returns
     * @memberof Css2Ts
     */
    private getCssContent(cssType: CssType): Promise<boolean> {
        return new Promise<boolean>((pRes, pRej) => {
            if (cssType.file) {
                let fileReader = new FileReader()
                fileReader.readAsText(cssType.file)
                fileReader.onload = (res: ProgressEvent) => {
                    this.cssRaw = fileReader.result as string
                    pRes(true)
                }
            } else {
                this.cssRaw = cssType.content
                pRes(true)
            }
        })
    }
    private parse() {
        this.cssStyleSheet = CSSOM.parse(this.cssRaw);
        return this
    }

    /**
     * 目的,保留为css关键帧的数组,原始
     * @param array 
     */
    private cssFilter() {
        this.array = Array.prototype.filter.call(this.cssStyleSheet.cssRules, (val) => val.cssRules && val.cssRules.length > 1);
        return this
    }

    private cssMerge() {
        /**val,->keyframes */
        this.array
            //doc 有前缀的不要
            .filter((val) => !val._vendorPrefix)
            //doc 没有关键帧数组或者为空
            .filter((val) => val.cssRules && val.cssRules.length)
            .forEach((val, i) => {
                /**关键帧列表对象,里面有css的所有关键帧 */
                let keyframes: { [name: string]: any[] } = {};
                Array.prototype.forEach.call(val.cssRules, (rule: CSSKeyframeRule) => {
                    //此关键帧在哪里用(%,from,to)
                    if (!rule.keyText) return;
                    /**位置列表,每一个关键帧可能有多个列表 */
                    let progressList = transfromProgress(rule.keyText);
                    /**每一个关键帧对应的属性 */
                    for (let i = 0; i < rule.style.length; i++) {
                        let cssProperty: string = rule.style[i];
                        //doc 对有前缀的抛弃 
                        if (cssProperty.match(/^-/)) continue;
                        //doc 将此属性分布赋值给各个时间段
                        progressList.forEach((val) => {
                            !keyframes[val] && (keyframes[val] = []);
                            keyframes[val].push(`${transfromPropertyName(cssProperty)}:'${rule.style[cssProperty]}'`)
                        })
                    }
                    //doc 追加时间用于ng动画
                    progressList.forEach((val) => {
                        !keyframes[val].filter((val) => /offset/.test(val)).length && keyframes[val].push(`offset:${val}`)
                    })
                })
                this.keyframeObject[val.name] = keyframes
            })
        return this
    }

    /**
     * @description 将关键帧对象数组变成ng的动画模式
     * @author cyia
     * @date 2018-11-17
     * @private
     * @returns
     * @memberof Css2TsService
     */
    private arrayToTs() {
        this.animationArray = []
        for (const keyframeName in this.keyframeObject) {
            if (!this.keyframeObject.hasOwnProperty(keyframeName)) return
            const keyframe = this.keyframeObject[keyframeName];
            let keyframesStr = '';
            for (const y in keyframe) {
                if (!keyframe.hasOwnProperty(y)) return
                const keyframes = keyframe[y];
                keyframesStr += `style({${keyframes.join(',')}}),`
            }
            keyframesStr = `
                const ${keyframeName}=animation([
                    animate('{{animate}}'),keyframes([
                        ${keyframesStr}
                    ])
                ], { params: { animate: '1000ms' }} )
                `
            this.animationArray.push(keyframesStr)

        }
        return this
    }
    /**
     * @description 添加ts文件的导入
     * @author cyia
     * @date 2018-11-11
     * @private
     * @returns
     * @memberof Css2Ts
     */
    private addTsHeader() {
        this.tsRaw = `import { animation, animate, keyframes, style,trigger,state,transition,useAnimation } from "@angular/animations";
        ${this.animationArray.join('')}`
        return this
    }
    private toFile() {
        let fileName = this.cssType.file ? this.cssType.file.name : 'ng-animate.ts'
        this.tsFile = new File([this.tsRaw], fileName, { type: 'text/plain;charset=utf-8' })
        return this
    }
    private addTrigger() {
        console.log(this.triggerList)
        let triggerStr = this.triggerList.map((val) => {
            console.log(val)
            let triggerA = val.value.map((item) => {
                console.log(item, item.type)
                let template = ''
                switch (item.type) {
                    case 1:
                        template = `
                        state('${(<TriggerState>item).stateName}', style({
                            ${(<TriggerState>item).cssStr}
                        }))`
                        break;
                    case 2:
                        template = `
                        transition('${(<TriggerTransition>item).stateChangeExpr}', [
                            useAnimation(${(<TriggerTransition>item).keyframeRule})
                        ])`
                        break;
                    default:
                        break;
                }
                console.log(template)
                return template
            }).join(',')
            let template = `
            trigger('${val.name}', [
               ${triggerA}
              ])
            `
            console.log(template)
            return template
        }).join(',')
        this.tsRaw = `${this.tsRaw}
        export const OutPutTrigger = [
        ${triggerStr}
        ]
        `
        console.log(triggerStr)
        return this;
    }
    public update() {
        this.addTrigger()
        this.arrayToTs().addTsHeader().addTrigger().toFile()
    }
}



import { animation, animate, keyframes, style } from "@angular/animations";
import * as CSSOM from "cssom";

export function cssMerge(array: any[]) {
    /**val,->keyframes */
    return array.map((val) => {
        if (val._vendorPrefix) return '';
        /**每一条规则,每一条可能有多个进度,需要叠加 */
        let keyframes: any = {};
        (val.cssRules as any[]).map((rule) => {
            /**css属性拼串,要加offset */
            let cssPropertys = '';
            if (!rule.keyText) {
                console.log('!!', rule)
            }
            let progressList = transfromProgress(rule.keyText)
            /**每一条进度对应的属性 */
            for (let i = 0; i < rule.style.length; i++) {
                let cssProperty: string = rule.style[i];
                if (cssProperty.match(/^-/)) continue;
                progressList.forEach((val) => {

                    !keyframes[val] && (keyframes[val] = '');
                    keyframes[val] += `${transfromPropertyName(cssProperty)}:'${rule.style[cssProperty]}',`;
                })
            }
            progressList.forEach((val) => {
                if (!(keyframes[val] as string).includes('offset')) {
                    keyframes[val] += `offset:${val},`
                }
            })

        })
        // console.log(keyframes)
        let keyframesStr = ''
        for (const x in keyframes) {
            if (keyframes.hasOwnProperty(x)) {
                keyframesStr += `style({${keyframes[x]}}),`
            }
        }
        // console.log(val)
        keyframesStr = `
        const ${val.name}=animation([
            animate('{{animate}}'),keyframes([
                ${keyframesStr}
            ])
        ], { params: { animate: '1000ms' }} )
        `
        console.log(val)

        return keyframesStr
    })
}
/**
 * 目的,保留为css关键帧的数组
 * @param array 
 */
export function cssFilter(array: any[]): any[] {
    return array.filter((val) => val.cssRules && val.cssRules.length > 1)
}
export function tsHeader(str) {
    return `import { animation, animate, keyframes, style } from "@angular/animations";
    ${str}`
}
/**
 * @description 将字符串转化为进度数组
 * @author cyia
 * @date 2018-10-20
 * @param str
 */
function transfromProgress(str: string) {
    return str.split(',').filter(val => val).map((val) => {
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
/**默认参数 */
const flipInX = animation([
    animate('1000ms', keyframes([
        style({
            offset: 0, opacity: '0',
            transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
            animationTimingFunction: 'ease-in'
        }),
        style({
            offset: 0.4, transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
            animationTimingFunction: 'ease-in'
        }),
        style({
            offset: 0.6, transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
            opacity: '1'
        }),
        style({ offset: 0.8, transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)' }),
        style({ offset: 1, transform: 'perspective(400px)' }),
    ]))
]
)
/**转化为驼峰法 */
function transfromPropertyName(name: string): string {
    let propertyNameArray = name.split('');
    for (let i = 0; i < propertyNameArray.length; i++) {
        const letter = propertyNameArray[i];
        if (/-/.test(letter)) {
            propertyNameArray.splice(i, 1)
            propertyNameArray[i] = propertyNameArray[i].toLocaleUpperCase()
        }
    }
    // console.log('返回值', propertyNameArray.join(''))
    return propertyNameArray.join('')
}

export interface CssType {
    file?: File;
    content?: string
}
export class Css2Ts {
    cssRaw: string;
    tsRaw: string;
    array: any[];
    cssFile: File;
    tsFile: File
    cssStyleSheet: any
    constructor(private cssType: CssType) {
        if (cssType.file) this.cssFile = cssType.file

    }
    async init() {
        await this.getCssContent(this.cssType);
        this.parse().cssFilter().cssMerge().tsHeader().toFile();
        return this;
    }
    /**
     * @description 获得css的内容
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
     * 目的,保留为css关键帧的数组
     * @param array 
     */
    private cssFilter() {
        this.array = this.cssStyleSheet.cssRules.filter((val) => val.cssRules && val.cssRules.length > 1)
        return this
    }

    private cssMerge() {
        /**val,->keyframes */
        this.array = this.array.map((val) => {
            if (val._vendorPrefix) return '';
            /**每一条规则,每一条可能有多个进度,需要叠加 */
            let keyframes: any = {};
            (val.cssRules as any[]).map((rule) => {
                /**css属性拼串,要加offset */
                let cssPropertys = '';
                if (!rule.keyText) {
                    console.log('!!', rule)
                }
                let progressList = transfromProgress(rule.keyText)
                /**每一条进度对应的属性 */
                for (let i = 0; i < rule.style.length; i++) {
                    let cssProperty: string = rule.style[i];
                    if (cssProperty.match(/^-/)) continue;
                    progressList.forEach((val) => {

                        !keyframes[val] && (keyframes[val] = '');
                        keyframes[val] += `${transfromPropertyName(cssProperty)}:'${rule.style[cssProperty]}',`;
                    })
                }
                progressList.forEach((val) => {
                    if (!(keyframes[val] as string).includes('offset')) {
                        keyframes[val] += `offset:${val},`
                    }
                })

            })
            // console.log(keyframes)
            let keyframesStr = ''
            for (const x in keyframes) {
                if (keyframes.hasOwnProperty(x)) {
                    keyframesStr += `style({${keyframes[x]}}),`
                }
            }
            // console.log(val)
            keyframesStr = `
            const ${val.name}=animation([
                animate('{{animate}}'),keyframes([
                    ${keyframesStr}
                ])
            ], { params: { animate: '1000ms' }} )
            `

            return keyframesStr
        })
        return this
    }

    private tsHeader() {
        this.tsRaw = `import { animation, animate, keyframes, style } from "@angular/animations";
        ${this.array.join('')}`
        return this
    }
    private toFile() {
        let fileName = this.cssFile ? this.cssFile.name : 'ng-animate.ts'
        this.tsFile = new File([this.tsRaw], fileName, { type: 'text/plain;charset=utf-8' })

        return this
    }
}


import "reflect-metadata";
const requiredMetadataKey = Symbol("required");
export function required(target: Object, propertyKey: string | symbol,
    parameterIndex: number) {
    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    console.log(existingRequiredParameters, requiredMetadataKey.toString())
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}
function validate(target: any, propertyName: string, descriptor:
    TypedPropertyDescriptor<Function>) {
    let method = descriptor.value;
    descriptor.value = function () {
        let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
        if (requiredParameters) {
            for (let parameterIndex of requiredParameters) {
                if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
                    throw new Error("Missing required argument."
                    );
                }
            }
        }
        return method.apply(this, arguments);
    }
}


export function FileParam() {
    return (target: Object, propertyKey: string | symbol,
        parameterIndex: number) => {
        // console.log(parameterIndex)
        // console.log(target[propertyKey]);
        // console.log(Object.getPrototypeOf(target[propertyKey]))
        // console.log(Object.getOwnPropertyDescriptor(target, propertyKey))
        let fun: PropertyDescriptor = Object.getOwnPropertyDescriptor(target, propertyKey)
        fun.value = () => {
            console.log('测试，可能出错')
        }
        Object.defineProperty(target, propertyKey, fun)
        // console.log(target)
        // target[propertyKey].arguments = (...params) => {
        //     console.log(params)
        // }
        // console.log(target[propertyKey].arguments)
    }
}

/**
 * @description 选择文件回调
 * @author cyia
 * @date 2018-11-08
 * @export
 * @param [index=0] 第几个参数是
 * @returns
 */
export function SelectedFile(index = 0) {
    return (target, key, descripor: PropertyDescriptor) => {
        let temp = descripor.value
        descripor.value = function () {
            let files: FileList = arguments[index].target.files;
            if (files.length) {
                arguments[index] = files;
                return temp.apply(this, arguments)
            }
        }
        return descripor
    }
}


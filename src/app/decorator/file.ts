



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


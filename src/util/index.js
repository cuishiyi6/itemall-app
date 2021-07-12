export const debounce = (func, wait) => {
    let timeout = null
    return function () {
        let context = this
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            func.apply(context)
        }, wait)
    }

}//防抖函数
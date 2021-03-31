/**
 * 判断是否为整数
 * @method isInteger
 * @param  {Number} num 数字
 * @return {Boolean}
 * @public
 */
export const isInteger = (num) => {
    return typeof num === 'number' && num % 1 === 0;
}

/**
 * 数字小数处理
 * @method uround
 * @param  {Number} num 数字
 * @param {Number} pos 可选,保留位数,不传为0。
 * @return {Number}
 * @public
 */
export const numRound = (num, pos = 0) => {
    return Math.round(num * Math.pow(10, pos)) / Math.pow(10, pos);
}

/**
 * 补零
 * @method zeroPadding
 * @param  {Number} num 数字
 * @public
 */
export const zeroPadding = (num) => {
    return num < 10 ? '0' + num : num;
}

/**
 * 根据传入的数字是否大于10000来显示。如果大于10000就显示万
 * @method zeroPadding
 * @param  {Number} num 数字
 * @public
 */
export const getNumberByTenThousand = (num) => {
    return num > 10000 ? Math.ceil(num / 10000)+"万" : num;
}
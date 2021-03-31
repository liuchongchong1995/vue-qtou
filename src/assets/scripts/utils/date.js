import { zeroPadding } from './number';


/**
 * 获取时间戳
 * @method nowTimeStamp
 * @param  {String} time 可选，如不传则获取当前时间。日期的格式，形式类似于'yyyy-MM-dd H:i:s'
 * @return {Number}
 * @public
 */
export function nowTimeStamp(time) {
    let d = new Date();

    if (time) {
        d = new Date(time);
    }

    return Math.round(+d / 1000);
}

/**
 * 日期格式化
 * @method dateFormat
 * @param  {Date}  timeStamp 时间戳精确到秒
 * @param  {String}  format  日期的格式，形式类似于'yyyy-MM-dd H:i:s'
 * @return {String}
 * @public
 */
export function dateFormat(timeStamp = nowTimeStamp(), format = 'yyyy-MM-dd H:i:s') {
    let res = format,
        oDateTime = new Date(parseInt(timeStamp) * 1000),
        hours = oDateTime.getHours(),
        minutes = oDateTime.getMinutes(),
        secondes = oDateTime.getSeconds(),
        dateObj,
        key;

    dateObj = {
        'y+': oDateTime.getFullYear(),
        'm+': zeroPadding(oDateTime.getMonth() + 1),
        'd+': zeroPadding(oDateTime.getDate()),
        'h+': zeroPadding(hours),
        'i+': zeroPadding(minutes),
        's+': zeroPadding(secondes)
    };

    for (key in dateObj) {
        let reg = new RegExp('(' + key + ')', 'i');

        if (reg.test(format)) {
            res = res.replace(RegExp.$1, dateObj[key]);
        }
    }

    return res;
}
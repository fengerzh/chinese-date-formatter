/**
 * Format date time string as Chinese format
 * @param {(string|Object)} dateTimeString
 * @param {string} format
 * @return {string}
 */

const dateFormat = require('dateformat');

module.exports = (dateTimeString, format) => {
  const numberArray = {
    0: '〇',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    7: '七',
    8: '八',
    9: '九',
  };
  const monthArray = {
    0: '一',
    1: '二',
    2: '三',
    3: '四',
    4: '五',
    5: '六',
    6: '七',
    7: '八',
    8: '九',
    9: '十',
    10: '十一',
    11: '十二',
  };
  const dateArray = {
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    7: '七',
    8: '八',
    9: '九',
    10: '十',
    11: '十一',
    12: '十二',
    13: '十三',
    14: '十四',
    15: '十五',
    16: '十六',
    17: '十七',
    18: '十八',
    19: '十九',
    20: '二十',
    21: '二十一',
    22: '二十二',
    23: '二十三',
    24: '二十四',
    25: '二十五',
    26: '二十六',
    27: '二十七',
    28: '二十八',
    29: '二十九',
    30: '三十',
    31: '三十一',
  };

  let d;
  if (typeof dateTimeString === 'string') {
    d = new Date(dateTimeString.replace(/-/g, '/'));
  } else {
    d = dateTimeString;
  }
  let formatResult = dateFormat(d, format);

  // convert year
  const yeararray = d.getFullYear().toString().split('');
  formatResult = formatResult.replace('YYYY', numberArray[yeararray[0]] + numberArray[yeararray[1]] + numberArray[yeararray[2]] + numberArray[yeararray[3]]);

  // convert month
  formatResult = formatResult.replace('YUE', monthArray[d.getMonth()]);

  // convert date
  formatResult = formatResult.replace('RI', dateArray[d.getDate()]);

  // convert weekdays
  const n = d.getDay();
  const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const weekDaysZhou = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  formatResult = formatResult.replace('ww', weekDays[n]);
  formatResult = formatResult.replace('zz', weekDaysZhou[n]);
  return formatResult;
};

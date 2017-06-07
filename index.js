/**
 * Format date time string as Chinese format
 * @param {string} dateTimeString
 * @param {string} format
 * @return {string}
 */

const dateFormat = require('dateformat');

module.exports = (dateTimeString, format) => {
  let formatResult = dateFormat(dateTimeString.replace('-', '/'), format);
  const d = new Date(dateTimeString);
  const n = d.getDay();
  const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const weekDaysZhou = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  formatResult = formatResult.replace('ww', weekDays[n]);
  formatResult = formatResult.replace('zz', weekDaysZhou[n]);
  return formatResult;
};

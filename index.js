/**
 * Format date time string as Chinese format
 * @param {(string|Object)} dateTimeString
 * @param {string} format
 * @param {string} locale
 * @return {string}
 */

const Globalize = require('globalize');
const caGregorian = require('cldr-data/main/zh/ca-gregorian');
const numbers = require('cldr-data/main/zh/numbers');
const likelySubtags = require('cldr-data/supplemental/likelySubtags');
const numberingSystems = require('cldr-data/supplemental/numberingSystems');
const weekData = require('cldr-data/supplemental/weekData');

module.exports = (dateTimeString, format, locale = 'zh') => {
  Globalize.load(caGregorian, numbers, likelySubtags, numberingSystems, weekData);

  const enFormatter = Globalize(locale).dateFormatter({ raw: format });

  let d;
  if (typeof dateTimeString === 'string') {
    d = new Date(dateTimeString.replace(/-/g, '/'));
  } else {
    d = dateTimeString;
  }

  return enFormatter(d);
};

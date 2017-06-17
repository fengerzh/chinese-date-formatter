# Chinese Date Time Formatter

[![npm](https://img.shields.io/npm/v/chinese-datetime-formatter.svg)](https://www.npmjs.com/package/chinese-datetime-formatter)
[![npm](https://img.shields.io/npm/dm/chinese-datetime-formatter.svg)](https://www.npmjs.com/package/chinese-datetime-formatter)
[![npm](https://img.shields.io/npm/dt/chinese-datetime-formatter.svg)](https://www.npmjs.com/package/chinese-datetime-formatter)
[![npm](https://img.shields.io/npm/l/chinese-datetime-formatter.svg)](https://www.npmjs.com/package/chinese-datetime-formatter)
[![Build Status](https://travis-ci.org/fengerzh/chinese-date-formatter.svg?branch=master)](https://travis-ci.org/fengerzh/chinese-date-formatter)
[![Coverage Status](https://coveralls.io/repos/github/fengerzh/chinese-date-formatter/badge.svg?branch=master)](https://coveralls.io/github/fengerzh/chinese-date-formatter?branch=master)

Date and time formatter with Simplified Chinese characters.

*Read this in other languages: [English](README.md), [简体中文](README.zh-cn.md).*

## Installation

```bash
$ npm install chinese-datetime-formatter
```

## Usage

```js
const dateFormat = require('chinese-datetime-formatter');

// Basic usage
dateFormat('2016-02-20 10:00:00', 'MMMd日 EEEE HH:mm');
// 2月20日 星期六 10:00

// With different week name
dateFormat('2016-02-20 10:00:00', 'MMMd日 (EEE)');
// '2月20日 (周六)'

// show full date string in Chinese characters
dateFormat('2016-02-20 10:00:00', 'yyyy年M月d日 EEEE HH:mm', 'zh-u-nu-native');
// '二〇一六年二月二〇日 星期六 一〇:〇〇'
```

## Parameters

- `datetime`: **string or Object** - Date object or a string in format of `2010-12-25 23:08:09` or `2010/12/25 23:08:09`
- `format`: **string** - Format string as [the unicode CLDR documentation](http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
- `locale`: **string** - Default as `zh`, if specified as `zh-u-nu-native`, use Chinese characters for date and time

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Mostly based on [globalizejs/globalize](https://github.com/globalizejs/globalize).

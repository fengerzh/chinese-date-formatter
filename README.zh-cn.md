# 中文日期时间格式化

[![npm](https://img.shields.io/npm/v/chinese-datetime-formatter.svg)](https://www.npmjs.com/package/chinese-datetime-formatter)
[![npm](https://img.shields.io/npm/dm/chinese-datetime-formatter.svg)](https://www.npmjs.com/package/chinese-datetime-formatter)
[![npm](https://img.shields.io/npm/dt/chinese-datetime-formatter.svg)](https://www.npmjs.com/package/chinese-datetime-formatter)
[![npm](https://img.shields.io/npm/l/chinese-datetime-formatter.svg)](https://www.npmjs.com/package/chinese-datetime-formatter)
[![Build Status](https://travis-ci.org/fengerzh/chinese-date-formatter.svg?branch=master)](https://travis-ci.org/fengerzh/chinese-date-formatter)
[![Coverage Status](https://coveralls.io/repos/github/fengerzh/chinese-date-formatter/badge.svg?branch=master)](https://coveralls.io/github/fengerzh/chinese-date-formatter?branch=master)

把日期和时间格式化为简体中文形式

*其他语言版本: [English](README.md), [简体中文](README.zh-cn.md).*

## 安装

```bash
$ npm install chinese-datetime-formatter
```

## 用法

```js
const dateFormat = require('chinese-datetime-formatter');

// 基本用法
dateFormat('2016-02-20 10:00:00', 'MMMd日 EEEE HH:mm');
// 2月20日 星期六 10:00

// 使用周作为星期代称
dateFormat('2016-02-20 10:00:00', 'MMMd日 (EEE)');
// '2月20日 (周六)'

// 中文日期的表达
dateFormat('2016-02-20 10:00:00', 'yyyy年M月d日 EEEE HH:mm', 'zh-u-nu-native');
// '二〇一六年二月二〇日 星期六 一〇:〇〇'
```

## 参数

- `datetime`: **string or Object** - Date对象类型或字符串，字符串格式必须为`2010-12-25 23:08:09`或`2010/12/25 23:08:09`
- `format`: **string** - 格式化参数，参见[the unicode CLDR documentation](http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)
- `locale`: **string** - 缺省为`zh`，显示阿拉伯数字的月份和日期，如果需要中文日期，可使用`zh-u-nu-native`

## 版权

此项目基于MIT版权 - 参见[LICENSE.md](LICENSE.md)详情。

## 鸣谢

* 基本上是对于[globalizejs/globalize](https://github.com/globalizejs/globalize)的一个封装，以简化编写代码时的依赖关系。

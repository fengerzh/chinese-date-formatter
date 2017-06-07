# 中文日期时间格式化
把日期和时间格式化为简体中文形式

*其他语言版本: [English](README.md), [简体中文](README.zh-cn.md).*

[![Build Status](https://travis-ci.org/fengerzh/chinese-date-formatter.svg?branch=master)](https://travis-ci.org/fengerzh/chinese-date-formatter)

[![Coverage Status](https://coveralls.io/repos/github/fengerzh/chinese-date-formatter/badge.svg?branch=master)](https://coveralls.io/github/fengerzh/chinese-date-formatter?branch=master)

## 安装

```bash
$ npm install chinese-datetime-formatter
```

## 用法

```js
const dateFormat = require('chinese-datetime-formatter');

// 基本用法
dateFormat('2016-02-20 10:00:00', 'm月d日 ww hh:MM');
// 2月20日 星期六 10:00

// 使用周作为星期代称
dateFormat('2016-02-20 10:00:00', '2016-02-20 10:00:00', 'm月d日 (zz)');
// '2月20日 (周六)'
```

### 格式化字符

标记 | 描述
---- | -----------
`d` | 阿拉伯数字的日期，没有前导0。
`dd` | 阿拉伯数字日期，有前导0。
`ddd` | 三个字母的英文周几的缩写。
`dddd` | 英文周几的全称。
`ww` | 表示为星期几的形式。
`zz` | 表示为周几的形式。
`m` | 阿拉伯数字月份，没有前导0。
`mm` | 阿拉伯数字月份，有前导0。
`mmm` | 三个字母的英文月份缩写.
`mmmm` | 英文月份全称.
`yy` | 两位数字的阿拉伯年份.
`yyyy` | 四位数字的阿拉伯年份.
`h` | 小时，没有前导0，最大12点.
`hh` | 小时，有前导0，最大12点.
`H` | 小时，没有前导0，最大24点.
`HH` | 小时，有前导0，最大24点.
`M` | 分钟，没有前导0.
`MM` | 分钟，有前导0.
`N` | ISO 8601 numeric representation of the day of the week.
`o` | GMT/UTC timezone offset, e.g. -0500 or +0230.
`s` | 秒，没有前导0.
`ss` | 秒，有前导0.
`S` | The date ordinal suffix (st, nd, rd, or th). Works well with `d`.
`l` | 有3位数的毫秒.
`L` | 有2位数的毫秒.
`t`	| Lowercase, single-character time marker string: a or p.
`tt` | Lowercase, two-character time marker string: am or pm.
`T` | Uppercase, single-character time marker string: A or P.
`TT` | Uppercase, two-character time marker string: AM or PM.
`W` | ISO 8601 week number of the year, e.g. 42
`Z` | US timezone abbreviation, e.g. EST or MDT. With non-US timezones or in the
`'...'`, `"..."` | Literal character sequence. Surrounding quotes are removed.
`UTC:` |	Must be the first four characters of the mask. Converts the date from local time to UTC/GMT/Zulu time before applying the mask. The "UTC:" prefix is removed.

## 版权

此项目基于MIT版权 - 参见[LICENSE.md](LICENSE.md)详情。

## 鸣谢

* 基于[felixge/node-dateformat](https://github.com/felixge/node-dateformat)进行扩展。

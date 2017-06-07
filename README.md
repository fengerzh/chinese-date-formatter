# Chinese Date Time Formatter
Date and time formatter with Simplified Chinese characters.

*Read this in other languages: [English](README.md), [简体中文](README.zh-cn.md).*

[![Build Status](https://travis-ci.org/fengerzh/chinese-date-formatter.svg?branch=master)](https://travis-ci.org/fengerzh/chinese-date-formatter)

[![Coverage Status](https://coveralls.io/repos/github/fengerzh/chinese-date-formatter/badge.svg?branch=master)](https://coveralls.io/github/fengerzh/chinese-date-formatter?branch=master)

## Installation

```bash
$ npm install chinese-datetime-formatter
```

## Usage

```js
const dateFormat = require('chinese-datetime-formatter');

// Basic usage
dateFormat('2016-02-20 10:00:00', 'm月d日 ww hh:MM');
// 2月20日 星期六 10:00

// With different week name
dateFormat('2016-02-20 10:00:00', '2016-02-20 10:00:00', 'm月d日 (zz)');
// '2月20日 (周六)'
```

### Mask options

Mask | Description
---- | -----------
`d` | Day of the month as digits; no leading zero for single-digit days.
`dd` | Day of the month as digits; leading zero for single-digit days.
`ddd` | Day of the week as a three-letter abbreviation.
`dddd` | Day of the week as its full name.
`ww` | Day of the week as its full name in Chinese as 星期.
`zz` | Day of the week as its full name in Chinese as 周.
`m` | Month as digits; no leading zero for single-digit months.
`mm` | Month as digits; leading zero for single-digit months.
`mmm` | Month as a three-letter abbreviation.
`mmmm` | Month as its full name.
`yy` | Year as last two digits; leading zero for years less than 10.
`yyyy` | Year represented by four digits.
`h` | Hours; no leading zero for single-digit hours (12-hour clock).
`hh` | Hours; leading zero for single-digit hours (12-hour clock).
`H` | Hours; no leading zero for single-digit hours (24-hour clock).
`HH` | Hours; leading zero for single-digit hours (24-hour clock).
`M` | Minutes; no leading zero for single-digit minutes.
`MM` | Minutes; leading zero for single-digit minutes.
`N` | ISO 8601 numeric representation of the day of the week.
`o` | GMT/UTC timezone offset, e.g. -0500 or +0230.
`s` | Seconds; no leading zero for single-digit seconds.
`ss` | Seconds; leading zero for single-digit seconds.
`S` | The date's ordinal suffix (st, nd, rd, or th). Works well with `d`.
`l` |  Milliseconds; gives 3 digits.
`L` | Milliseconds; gives 2 digits.
`t`	| Lowercase, single-character time marker string: a or p.
`tt` | Lowercase, two-character time marker string: am or pm.
`T` | Uppercase, single-character time marker string: A or P.
`TT` | Uppercase, two-character time marker string: AM or PM.
`W` | ISO 8601 week number of the year, e.g. 42
`Z` | US timezone abbreviation, e.g. EST or MDT. With non-US timezones or in the
`'...'`, `"..."` | Literal character sequence. Surrounding quotes are removed.
`UTC:` |	Must be the first four characters of the mask. Converts the date from local time to UTC/GMT/Zulu time before applying the mask. The "UTC:" prefix is removed.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Mostly based on [felixge/node-dateformat](https://github.com/felixge/node-dateformat).

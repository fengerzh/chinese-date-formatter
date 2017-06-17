/* global describe, it */

const expect = require('chai').expect;
const chineseDateTimeFormatter = require('../index');

describe('#chineseDateTimeFormatter', () => {
  it('should convert basic date time string', () => {
    const result = chineseDateTimeFormatter('2016-02-20 10:00:00', 'm月d日 ww hh:MM');
    expect(result).to.equal('2月20日 星期六 10:00');
  });

  it('should convert basic date time string with slash', () => {
    const result = chineseDateTimeFormatter('2016/02/20 10:00:00', 'm月d日 ww hh:MM');
    expect(result).to.equal('2月20日 星期六 10:00');
  });

  it('should convert basic date string', () => {
    const result = chineseDateTimeFormatter('2016-02-20 10:00:00', 'm月d日 ww');
    expect(result).to.equal('2月20日 星期六');
  });

  it('should convert basic date string with weekday as zhou', () => {
    const result = chineseDateTimeFormatter('2016-02-20 10:00:00', 'm月d日 (zz)');
    expect(result).to.equal('2月20日 (周六)');
  });

  it('should convert basic date string without Chinese', () => {
    const result = chineseDateTimeFormatter('2016-02-20 10:00:00', 'yyyy-mm-d');
    expect(result).to.equal('2016-02-20');
  });

  it('should convert basic date string only with time', () => {
    const result = chineseDateTimeFormatter('2016-02-20 10:00:00', 'hh:MM:ss');
    expect(result).to.equal('10:00:00');
  });

  it('should convert basic time string without seconds', () => {
    const result = chineseDateTimeFormatter('2016-02-20 10:00:00', 'hh:MM');
    expect(result).to.equal('10:00');
  });

  it('should convert basic date string without year', () => {
    const result = chineseDateTimeFormatter('2017-06-07 10:00:00', 'm月d日');
    expect(result).to.equal('6月7日');
  });

  it('should convert data object', () => {
    const result = chineseDateTimeFormatter(new Date('2016-02-20 10:00:00'), 'm月d日 ww hh:MM');
    expect(result).to.equal('2月20日 星期六 10:00');
  });

  it('should convert data object with slash', () => {
    const result = chineseDateTimeFormatter(new Date('2016/02/20 10:00:00'), 'm月d日 ww hh:MM');
    expect(result).to.equal('2月20日 星期六 10:00');
  });

  it('should convert basic date time string', () => {
    const result = chineseDateTimeFormatter('2016-02-20 10:00:00', 'YYYY年YUE月RI日 ww hh:MM');
    expect(result).to.equal('二〇一六年二月二十日 星期六 10:00');
  });
});

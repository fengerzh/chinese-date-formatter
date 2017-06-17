/* global describe, it */

const expect = require('chai').expect;
const chineseDateTimeFormatter = require('../index');

describe('#chineseDateTimeFormatter', () => {
  it('should convert basic date time string', () => {
    const result = chineseDateTimeFormatter('2016-02-20 10:00:00', 'MMMd日 EEEE HH:mm');
    expect(result).to.equal('2月20日 星期六 10:00');
  });

  it('should convert basic date time string with slash', () => {
    const result = chineseDateTimeFormatter('2016/02/20 10:00:00', 'MMMd日 EEEE HH:mm');
    expect(result).to.equal('2月20日 星期六 10:00');
  });

  it('should convert basic date string', () => {
    const result = chineseDateTimeFormatter('2016-02-20 10:00:00', 'MMMd日 EEEE');
    expect(result).to.equal('2月20日 星期六');
  });

  it('should convert basic date string with weekday as zhou', () => {
    const result = chineseDateTimeFormatter('2016-02-20 10:00:00', 'MMMd日 (EEE)');
    expect(result).to.equal('2月20日 (周六)');
  });

  it('should convert basic date string without Chinese', () => {
    const result = chineseDateTimeFormatter('2016-02-20 10:00:00', 'yyyy-MM-dd');
    expect(result).to.equal('2016-02-20');
  });

  it('should convert basic date string only with time', () => {
    const result = chineseDateTimeFormatter('2016-02-20 10:00:00', 'HH:mm:ss');
    expect(result).to.equal('10:00:00');
  });

  it('should convert basic time string without seconds', () => {
    const result = chineseDateTimeFormatter('2016-02-20 10:00:00', 'HH:mm');
    expect(result).to.equal('10:00');
  });

  it('should convert basic date string without year', () => {
    const result = chineseDateTimeFormatter('2017-06-07 10:00:00', 'MMMd日');
    expect(result).to.equal('6月7日');
  });

  it('should convert data object', () => {
    const result = chineseDateTimeFormatter(new Date('2016-02-20 10:00:00'), 'MMMd日 EEEE HH:mm');
    expect(result).to.equal('2月20日 星期六 10:00');
  });

  it('should convert data object with slash', () => {
    const result = chineseDateTimeFormatter(new Date('2016/02/20 10:00:00'), 'MMMd日 EEEE HH:mm');
    expect(result).to.equal('2月20日 星期六 10:00');
  });

  it('should convert basic date time string', () => {
    const result = chineseDateTimeFormatter('2016-02-20 10:00:00', 'yyyy年M月d日 EEEE HH:mm', 'zh-u-nu-native');
    expect(result).to.equal('二〇一六年二月二〇日 星期六 一〇:〇〇');
  });
});

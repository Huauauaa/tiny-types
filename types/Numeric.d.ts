export interface INumericFormat {
  /**
   * 保留小数位数
   */
  fraction: 4
  /**
   * 舍入点，0-9之间的数字，如配置为7时则为6舍7入，默认为5（四舍五入）;配置为0或>9将会进行截取
   */
  rounding: 0
  /**
   * 前置标识
   */
  prefix: '$'
  /**
   * 整数部分分组间隔，即第一个分组位数
   */
  groupSize: 3
  /**
   * 整数部分第二级分组间隔，不设置或为0时 自动取groupSize
   */
  secondaryGroupSize: 2
  /**
   * 整数部分分组分隔符
   */
  groupSeparator: ','
  /**
   * 小数点符号
   */
  decimalSeparator: '.'
  /**
   * 小数部分分组间隔
   */
  fractionGroupSize: 0
  /**
   * 小数分组分隔符
   */
  fractionGroupSeparator: ''
  /**
   * 后置标识
   */
  suffix: '@'
}

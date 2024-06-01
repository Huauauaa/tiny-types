export interface ICustomObject<T = any> {
  /**
   * 自定义属性
   */
  [propName: string]: T
}

export interface ILink {
  /**
   * 锚点的key值
   */
  key: string
  /**
   * 导航的hash值
   */
  link: string
  /**
   * 锚点标题
   */
  title: string
  /**
   * 子锚点
   */
  children: ILink[]
}

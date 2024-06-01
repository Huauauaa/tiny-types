export interface IRadioGroupOptions {
  /**
   * 选中时对应的值
   */
  label: string
  /**
   * 描述文本
   */
  text?: number
  events?: {
    /**
     * 点击事件
     */
    click?: (e: Event) => void
    /**
     * change事件
     */
    change?: (e: Event) => void
  }
}

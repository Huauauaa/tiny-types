export interface ICheckboxGroupOptions {
  /**
   * 选中时对应的值
   */
  label: string
  /**
   * 描述文本
   */
  text?: number
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 是否默认选中
   */
  checked?: boolean

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

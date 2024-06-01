export interface IDomData {
  /**
   * 指引的标题
   */
  title: string
  /**
   * 指引的内容（可以是 html）
   */
  text: string
  /**
   * 需要绑定指引的元素类名（只能是类名，若未传入则显示为上下左右居中且无指示箭头）
   */
  domElement: string
  /**
   * 添加需要高亮的元素的类名
   */
  hightBox: string[]
  /**
   * 要添加到步骤的内容元素的一串类名
   */
  classes: string

  /**
   * 展示前的回调函数
   */
  beforeShow: () => void
  /**
   * 隐藏前的回调函数
   */
  beforeHide: () => void
  /**
   * 显示的回调函数
   */
  show: () => void
  /**
   * 隐藏的回调函数
   */
  hide: () => void
  /**
   * 关闭的回调函数
   */
  cancel: () => void
  /**
   * 销毁的回调函数
   */
  destroy: () => void
  /**
   * 完成的回调函数
   */
  completey: () => void

  /**
   * 需要设置的按钮组
   */
  button: {
    /**
     * 按钮名
     */
    text: string
    /**
     * 需要执行的步骤，包含 next(下一步)、back(返回)、complete(完成)
     */
    action: 'next' | 'back' | 'complete'
    /**
     * 按钮的类名
     */
    classes: string
    /**
     * 是否是次要按钮
     */
    secondary: boolean
  }[]
}

export type IPosition =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'

export interface IPopperOption {
  /**
   * 是否监听元素所有上级有滚动元素的scroll事件，监听到则更新popper的位置。用于解决某些弹出层位置在页面滚动时，位置不正确的场景，默认false
   */
  bubbling: boolean
  /**
   * 当触发源隐藏时，自动隐藏弹出层，默认true
   */
  followReferenceHide: boolean
  /**
   * 弹出层消失后，是否移除弹出层的DOM元素，布尔false
   */
  removeOnDestroy: boolean
  /**
   * 滚动过程中是否更新隐藏的弹出层位置
   */
  updateHiddenPopperOnScroll: boolean
  /**
   * 滚动过程中,弹出层的碰撞边界。 默认值为： 'viewport'
   */
  boundariesElement: 'viewport' | 'body' | HTMLElement
}

export type IPopperPlacement =
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

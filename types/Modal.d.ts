export interface IModalEventParam {
  /**
   * 弹窗类型
   */
  type: 'alert' | 'message' | 'confirm'
  /**
   * Modal组件实例
   */
  $modal: ComponentPublicInstance
}

export type IStatus = 'info' | 'success' | 'warning' | 'error' | 'loading'

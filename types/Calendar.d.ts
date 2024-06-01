export interface EventList {
  /**
   * 指定需要展示事件的日期
   */
  time: number
  /**
   * 指定事件标题
   */
  title: string
  /**
   * 指定事件的具体内容
   */
  content: string
  /**
   * 事件主题类型，包括 warning、error、info、success。
   */
  type: 'warning' | 'error' | 'info' | 'success'
}

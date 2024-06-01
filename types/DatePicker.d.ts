export interface IPickerOptions {
  /**
   * 每周的第一天是星期几，默认值是7，也就是星期天
   */
  firstDayOfWeek: number
  //
  /**
   * 实现部分禁用，此时只能选择一部分日期
   */
  disabledDate: (time: Date) => boolean
  /**
   * 选中日期后执行的回调，需要与 daterange 或 datetimerange 类型配合使用才生效
   */
  onPick: (range: { minDate: Date; maxDate: Date }) => void
  /**
   * 快捷选项
   */
  shortcuts: {
    text: string
    onClick: (picker: { $emit: (type: string, date: Date) => void }) => void
    type: 'startFrom' | 'EndAt'
    startDate: Date
    endDate: Date
  }[]
}

export type IType =
  | 'date'
  | 'dates'
  | 'daterange'
  | 'datetime'
  | 'datetimerange'
  | 'week'
  | 'month'
  | 'monthrange'
  | 'quarter'
  | 'year'
  | 'years'
  | 'yearrange'

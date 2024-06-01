export interface IStep {
  hour: number
  minute: number
  second: number
}

export interface IPickerOptions {
  /**
   * 可选的时间范围
   */
  selectableRange: string

  /**
   * 下拉框中显示的格式
   */
  format: string
}

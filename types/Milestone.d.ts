export interface IStatus {
  /**
   * 可通过completed-field自定义completed键名
   */
  completed?: string
  doing: string
  back: string
  end: string
  cancel: string
}

export interface ICustomData {
  name?: string
  time?: string
  status?: string
  flags?: string
  content?: string
  /**
   * 可自定义以上的默认属性
   */
  [propName: string]: string
}

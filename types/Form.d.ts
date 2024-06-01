export type IFormPosition =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'left-start'
  | 'left'
  | 'left-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end'

/**
 * 表单项检验触发时机
 */
export type IFormTrigger = 'change' | 'blur'

export interface IFormRules {
  /**
   * 是否必填
   */
  required?: boolean
  /**
   * 校验错误的提示
   */
  message?: number

  /**
   * 内置的类型校验
   */
  type?:
    | 'date'
    | 'dateTime'
    | 'float'
    | 'array'
    | 'string'
    | 'number'
    | 'url'
    | 'time'
    | 'email'
    | 'object'
    | 'boolean'
    | 'enum'

  /**
   * 校验触发时机， 默认为 ['change', 'blur'] 两种场景都触发，如果仅在主动调用校验方式时触发，可设置为空数组 []。
   */
  trigger?: IFormTrigger | IFormTrigger[]

  /**
   * 同步检验函数，调用回调传递错误信息。
   */
  validator?: (
    /**
     * from内部处理后的rule
     */
    rule: IFormInnerRule,
    /**
     * 表单model对应的值，根据表单项prop获取
     */
    value: any,
    callback: (e: Error) => void,
    /**
     * prop和value构造的对象
     */
    data: object,
    /**
     *  检验配置，一般不需要用到
     */
    options: object,
  ) => void

  /**
   * 异步校验函数，resolve则表示校验成功，reject表示校验失败。
   */
  asyncValidator?: (
    rule: IFormInnerRule,
    value: any,
    callback: (e: Error) => void,
    data: object,
    options: object,
  ) => Promise<any>
}

export interface IFormInnerRule {
  /**
   * 表单项prop
   */
  field: string
  /**
   * 表单项完整prop（嵌套检验时有用）
   */
  fullField: string
  /**
   * 内部使用
   */
  type: string
}

/**
 * 校验错误返回对象
 */
export interface IFormError {
  [prop: string]: IFormErrorField[]
}

export interface IFormErrorField {
  /**
   * 校验错误提示
   */
  message: string
  /**
   * 校验失败的prop
   */
  field: string
}

declare function IFormValidateMethod(
  callback: (isValid: boolean, fields: IFormError) => void,
): Promise<boolean>

declare function IFormValidateFieldMethod(
  prop: string | string[],
  callback: (msg: string, field: IFormError) => void,
): void

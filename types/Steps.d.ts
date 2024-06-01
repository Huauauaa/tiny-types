/**
 * 节点数据
 */
export interface IStepsItem {
  /**
   * 节点名称
   */
  name: string //
  /**
   * 节点状态，取值见下面IStepsStatus类型说明
   */
  status?: IStepsStatus //
  /**
   * 描述，仅用于单链型步骤条
   */
  description?: string //
  /**
   * 节点右上角徽标计数，仅用于默认条形步骤条
   */
  count?: number //
}

export type IStepsStatus = 'doing' | 'done' | 'disabled' | 'error' | ''

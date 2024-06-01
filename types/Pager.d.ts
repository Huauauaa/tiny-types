/**
 * 函数接受一个参数
 */
export interface IBeforeChangeEvent {
  (param: IBeforeChangeParam): void
}

export interface IBeforeChangeParam {
  /**
   * 回调函数，调用则继续本次变更
   */
  callback: () => void //
  /**
   * 回滚函数，调用则阻止本次变更
   */
  rollback: () => void //
  /**
   * 变更后分页大小
   */
  newPage: number // 变更后分页大小
  /**
   * 变更后分页大小
   */
  newPageSize: number //
  /**
   * 当前所在页
   */
  currentPage: number //
  /**
   * 当前分页大小
   */
  currentPageSize: number //
}

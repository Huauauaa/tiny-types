export interface ITransferData {
  key: string
  label: string
  disabled: string
  [other: string]: any
}

export interface IDropConfig {
  /**
   * 指定拖放排序的插件Sortable, 该变量通过 import Sortable from 'sortablejs' 导入
   */
  plugin: object
}

export interface IPagerOp {
  /**
   * 通过 mode 设置分页组件组件渲染模式，不同模式是组件内置的 layout 设置， mode 优先级高于 layout
   */
  mode: string
  /**
   * 总页数
   */
  pagerCount: number
  pageVo: {
    currentPage: number
    pageSize: number
    pageSizes: number[]
    /**
     * 分页组件布局默认值：'total, prev, pager, next, jumper, sizes'
     */
    layout: string
  }
}

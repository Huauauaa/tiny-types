export interface IDialogOption {
  /**
   * 设置弹出框距离窗口顶部的高度，默认为 15vh
   */
  top: string
  /**
   * 弹出框的宽度,默认 500px
   */
  width: string
  /**
   * 弹出框标题
   */
  title: string
  beforeClose: () => boolean
  /**
   * 自定义配置弹窗类名
   */
  dialogClass: string
}

export interface IGridOption {
  /**
   * 表格列配置
   */
  columns: IColumnConfig[]
  /**
   * 表格列数据
   */
  data: []
  /**
   * 表格多选配置
   */
  selectConfig: {
    /**
     * 翻页操作是否保留历史选择数据
     */
    reserve: boolean
    /**
     * 嵌套表格多选时，设置默认表格选中的数据
     */
    checkRowKeys: Array<string | number>
  }
  /**
   * 表格单选配置
   */
  radioConfig: {
    /**
     * 嵌套表格单选时，设置默认表格选中的数据
     */
    checkRowKey: string | number
  }
}

export interface IColumnConfig {
  type: 'index' | 'radio' | 'checkbox'
  id: string
  title: string
  label: string
  width: string | number
}

export interface IPagerOption {
  /**
   * 当前页，默认 1
   */
  currentPage: number
  /**
   * 每页显示条目个数，默认 10
   */
  pageSize: number
  /**
   * 每页显示个数选择器的选项设置，默认 [10, 20, 30, 40, 50, 100]
   */
  pageSizes: Array<number>
  /**
   * 总条目数
   */
  total: number
  /**
   * 分页布局，默认 'total, prev, pager, next, jumper'
   */
  layout: string
}

export interface ISelectedBoxOption {
  config: {
    pkField: string
    pkFieldType: string
    showField: Array<string>
    /**
     * 传 sortablejs 插件
     */
    plugin: () => void
  }
}

export interface ITreeOption {
  /**
   * 树节点的唯一标识
   */
  nodeKey: string
  pathSplit: string
  props: {
    /**
     * 默认为 children
     */
    children: string
    /**
     * 默认为 label
     */
    label: string
    /**
     *  默认为 isLeaf'
     */
    isLeaf: string
  }
  /**
   * 是否为父子严格模式
   */
  checkStrictly: boolean
  /**
   * 相邻级节点间的水平缩进，单位为像素
   */
  baseIndent: number
  /**
   * 加载子树数据的方法
   */
  load: (node, resolve) => void
  /**
   * 使用树展示数据时，用于配置搜索过滤接口
   */
  queryPidsBySearch: () => ITreeNodeData
  /**
   * 使用树展示数据时，用于配置初始化过滤接口
   */
  queryPidsByIds: () => ITreeNodeData
  /**
   * 默认勾选的节点的keys
   */
  defaultCheckedKeys: Array<string | number>
}

export interface ITreeNodeData {
  /**
   * node-key='id' 设置节点的唯一标识
   */
  id: number | string
  /**
   * 节点显示文本
   */
  label: string
  /**
   * 子节点
   */
  children?: ITreeNodeData[]
}

/**
 * 树组件的节点数据信息
 */
export interface ItreeData {
  id: number | string
  label: string
  pid: number | string
}

/**
 * 用户自定义的表格行数据
 */
export interface IGridData {
  id: number | string
  [otherKeys: string]: any
}

export interface IChangeParam {
  values: Array<number | string> | number | string
  texts: string | Array<string>
  selectedDatas: ItreeData[] | IGridData[]
}

export interface IBeforeChangeParam {
  /**
   * 回调函数，调用则继续本次变更
   */
  callback: () => void
  /**
   * 回滚函数，调用则阻止本次变更
   */
  rollback: () => void
  /**
   * 变更后所在页
   */
  newPage: number
  /**
   * 变更后分页大小
   */
  newPageSize: number
  /**
   * 当前所在页
   */
  currentPage: number
  /**
   * 当前分页大小
   */
  currentPageSize: number
}

export interface IResizeEvent {
  /**
   * 当前的全屏状态
   */
  fullscreen: boolean

  /**
   * 弹窗的元素
   */
  dialog: HTMLElement
}

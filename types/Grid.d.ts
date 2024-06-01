import type { Component } from 'vue'

export interface IRow<T = any> {
  // 表格行数据
  [filed: string]: T
}

export interface IColumnConfig {
  type: 'index' | 'radio' | 'checkbox'
  id: string
  prop: string
  rules: IValidRules
  required: boolean
  property: string
  title: string
  label: string
  width: string | number
  minWidth: string | number
  resizable: boolean
  fixed: boolean
  align: 'left' | 'center' | 'right'
  headerAlign: 'left' | 'center' | 'right'
  footerAlign: 'left' | 'center' | 'right'
  showOverflow: boolean | 'ellipsis' | 'tooltip' | 'title'
  showHeaderOverflow: boolean | 'ellipsis' | 'tooltip' | 'title'
  showTip: boolean
  showHeaderTip: boolean
  className: string
  headerClassName: string
  footerClassName: string
}

export interface IPagerConfig {
  component?: Component
  attrs: {
    currentPage: number
    pageSize: number
    pageSizes: number[]
    total: number
    // 分页组件布局默认值：'total, prev, pager, next, jumper, sizes'
    layout: string
  }
}

export interface IDataHandler {
  api: () => Promise
}

export interface IRowGroup {
  // 列标识符，行分组会将具有相同值的列进行分组展示
  field: string
}

export interface IToolbarConfig {
  component: GridToolbar
  buttons: {
    code: string
    name: string
  }[]
}

export interface IToolTipConfig {
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end'
  visibleArrow?: boolean
  enterable?: boolean
  type?: 'normal' | 'warning' | 'error' | 'info' | 'success'
  effect?: 'dark' | 'light'
  // 自定义提示内容
  contentMethod?: () => string | VNode
}

export interface IMenuOptions {
  code: string
  name: string
  visible?: boolean
  disabled?: boolean
}

export interface IContextMenuConfig {
  body?: {
    options: IMenuOptions
  }
  footer?: {
    options: IMenuOptions
  }
  visibleMethod?: () => boolean
}

export interface IValidRules {
  [filed: string]: {
    type?: string
    required?: boolean
    validator?: () => boolean
    message?: string
    min?: number
    max?: number
  }
}
;[]

export interface IExpandConfig {
  // 默认展开所有行
  expandAll?: boolean
  // 触发方式 default（点击按钮触发）,cell（点击单元格触发）,row（点击行触发）
  trigger?: 'default' | 'row' | cell
  // 默认展开指定行（需要有 row-id）
  expandRowKeys?: string[]
  // 对于同一级的节点，每次只能展开一个
  accordion?: boolean
  // 控制是否渲染展开行
  activeMethod?: ({ row: IRow }) => boolean
  // 配置是否显示展开图标
  showIcon?: boolean
}

export interface IOptimizationConfig {
  animat: boolean
  delayHover: number
  scrollX: {
    // 指定大于多少范围时自动启动虚拟滚动（启用 X 虚拟滚动，必须固定所有列宽，否则无法兼容）默认100
    gt?: number
    // 当剩余数据少于指定范围时触发重新渲染 默认自动计算
    oSize?: number
    // 每次渲染条数 默认自动计算
    rSize?: number
    // 指定可视区域条数
    vSize?: number
  }
  scrollY: {
    // 指定大于多少范围时自动启动虚拟滚动（启用 Y 虚拟滚动，必须固定所有行高，否则无法兼容）默认500
    gt?: number
    // 当剩余数据少于指定范围时触发重新渲染 默认自动计算
    oSize?: number
    // 每次渲染条数 默认自动计算
    rSize?: number
    // 指定可视区域条数 默认自动计算
    vSize?: number
    // 指定行高 默认自动计算
    rHeight?: number
    // 自动适配最优的渲染方式 默认true
    adaptive?: boolean
  }
}

export interface IKeyboardConfig {
  // 启用方向键功能
  isArrow?: boolean
  isDel?: boolean
  isTab?: boolean
  isEdit?: boolean
}

export interface IMouseConfig {
  // 是否开启左键选中单元格功能（只对 editConfig.mode=cell 有效），默认为 false
  selected: boolean
}

export interface IRadioConfig {
  // 触发选中的方式，可选项包括 cell（单击图标所在单元格触发） / row（点击行触发），默认点击图标触发
  trigger?: 'cell' | 'row'
  // 单选框显示的字段名，可以直接显示在单选框中
  labelField?: string
  // 默认选中指定行（只会在初始化时被触发一次，需要有 row-id）
  checkRowKey?: string
  // 是否允许选中的方法，该方法的返回值用来决定这一行的 Radio 是否可以选中
  checkMethod?: () => boolean
}

export interface ISelectConfig {
  // 触发选中的方式，可选项包括 cell（单击图标所在单元格触发） / row（点击行触发），默认点击图标触发
  trigger?: 'cell' | 'row'
  // 复选框显示的字段名，可以直接显示在复选框中
  labelField?: string
  // 默认勾选开指定行（只会在初始化时被触发一次，需要有 row-id）
  checkRowKeys?: string[]
  // 是否允许选中的方法，该方法的返回值用来决定这一行的 checkbox 是否可以勾选
  checkMethod?: () => boolean
  // 默认勾选所有（只会在初始化时被触发一次）}
  checkAll?: boolean
  // 是否显示全选按钮（如果 checkStrictly=true 则默认为 false）
  showHeader?: boolean
  // 是否严格的遵循父子不互相关联的做法
  checkStrictly?: boolean
  // 翻页操作是否保留历史选择数据
  reserve?: boolean
}

export interface ISortConfig {
  // 排序触发方式，可配置为 cell（点击头部单元格触发排序），不配置时默认为点击上下箭头触发排序
  trigger?: 'cell'
}

export interface ITreeConfig {
  // 展开子级触发方式：'default'(点击按钮触发)；'cell'(点击单元格触发)；'row'(点击行触发)
  trigger?: 'default' | 'cell' | 'row'
  // 子级索引是否按数字递增显示：true(子级索引按数字递增显示，父级1，子级2)；false(子级索引在父级索引基础上增加，父级1，子级1.1)
  ordered?: boolean
  // 控制水平缩进距离，默认 16，单位 px
  indent?: number
  // 指定子级数据的字段名
  children?: string
  // 是否展开所有行
  expandAll?: boolean
  // 默认展开所给数组中的指定行，需要有row-id，可以由行的'_RID'属性获取
  expandRowKeys?: string[]
  // 对于同一级的多个子节点，是否只能同时展开一个子节点
  accordion?: boolean
}

export interface IValidConfig {
  // 校验提示类型，'inline'(内置提示)；'tooltip'(tooltip文字提示)
  message?: 'inline' | 'tooltip'
}

export interface ISummaryConfig {
  // 统计字段名
  fields: string[]
  // 小数点后保留的小数位
  fraction?: boolean
  // 是否截断，默认为四舍五入，不截断
  truncate?: boolean
  // 统计显示的文本
  text?: string
}

export interface IScrollLoadConfig {
  // 是否连续
  isInfinity: boolean
  // 每次加载多少条
  pageSize: number
}

export interface IEventsConfig {
  [field: string]: () => void
}

export interface IDropConfig {
  // sortablejs 插件
  plugin: Sortable
  // 开启行拖拽
  row: boolean
  // 开启列拖拽
  column: boolean
  // 拖拽前函数，返回 false 取消拖动
  onBeforeMove?: () => boolean
  // 拖拽触发源选择器一般是class类名
  trigger?: string
  // 根据行的类名来控制是否可以拖动
  filter?: string
  // 如果变动了树层级，可以指定是否需要刷新数据
  refresh?: boolean
}

export interface IEditConfig {
  // 激活触发方式
  trigger: 'click' | 'dblclick' | 'manual'
  // 激活类型单元格激活或者行
  mode: 'cell' | 'row'
  // 是否显示状态
  showStatus?: boolean
  // 自定义编辑规则，返回true可以编辑返回false则禁止编辑
  activeMethod?: ({ row: IRow, column: IColumnConfig }) => boolean
}

export interface IRecordset {
  insertRecords: IRow[]
  removeRecords: IRow[]
  updateRecords: IRow[]
}

export interface IPageChangeArgs {
  // table组件vue实例
  $grid: Component
  // 当前页码
  currentPage: number
  //当前分页组件布局信息 'total, prev, pager, next, jumper, sizes'
  layout: string
  // 当前每页显示条数
  pageSize: number
  //可切换的每页条数
  pageSizes: number[]
  //总数据条数
  total: number
}

export interface IBeforePageChangeArgs {
  //新页码
  newPage: number
  //新的分页大小
  newPageSize: number
  //当前页码
  currentPage: number
  //当前的页大小
  currentPageSize: number
  //生效回调
  callback: () => void
  //失效回调
  rollback: () => void
}

export interface IToolbarButtonClickArgs {
  //表格组件实例对象信息
  $grid: Component
  //按钮信息对象
  button: {
    code: string
    name: string
  }[]
  // 按钮功能类型
  code: string
}

export interface ICellClickArgs {
  // 当前行
  row: IRow
  // 当前行的下标
  rowIndex: number
  // 当前列
  column: IColumnConfig
  // 当前列的下标
  columnIndex: number
}

export interface ICellContextMenuArgs {
  // 当前行
  row: IRow
}
export interface ICellArgs {
  //当前行
  row: IRow
  //当前行的下标
  rowIndex: number
  // 当前列
  column: IColumnConfig
  // 当前列的下标
  columnIndex: number
}
export interface ICurrentChangeArgs {
  // 当前行
  row: IRow
}
export interface IEditActivedArgs {
  // 当前行
  row: IRow
  // 当前列
  column: IColumnConfig
}
export interface IEditClosedArgs {
  // 当前行
  row: IRow
  // 当前列
  column: IColumnConfig
}
export interface IEditDisabledArgs {
  //当前行
  row: IRow
  // 当前列
  column: IColumnConfig
}
export interface IFilterChangeArgs {
  //表格的信息对象
  $table: Component
  //过滤列的过滤数据信息
  filters: object
}
export interface IFooterCellClickArgs {
  $columnIndex: number
  $rowIndex: number
  // table组件vue实例
  $table: Component
  // 当前单元格节点
  cell: HTMLElement
  // 当前列信息
  column: IColumnConfig
  columnIndex: number
}
export interface IContextMenuArgs {
  $columnIndex: number
  $rowIndex: number
  // table组件vue实例
  $table: Component
  // 当前单元格节点
  cell: HTMLElement
  // 当前列信息
  column: IColumnConfig
  columnIndex: number
  // 配置清除等功能信息
  options: object[]
  // 表格区域类型
  type: 'header' | 'footer' | 'body'
}
export interface IFooterCellDblClickArgs {
  $columnIndex: number
  $rowIndex: number
  // table组件vue实例
  $table: Component
  // 当前单元格节点
  cell: HTMLElement
  // 当前列信息
  column: IColumnConfig
  columnIndex: number
}
export interface IHeaderCellClickArgs {
  $columnIndex: number
  $rowIndex: number
  // table组件vue实例
  $table: Component
  // 点击表头单元格
  cell: HTMLElement
  // 当前列信息
  column: IColumnConfig
  columnIndex: number
  // 当前点击节点过滤标识
  triggerFilter: boolean
  // 当前点击节点排序标识
  triggerSort: boolean
}
export interface IHeaderCellDblClickArgs {
  // 列数据
  column: IColumnConfig
  // 列索引
  columnIndex: number
  // table组件 vue实例
  $table: Component
  // 点击的单元格dom
  cell: HTMLElement
}
export interface IResizableChangeArgs {
  // table组件的vue 实例
  $table: Component
  // 列配置信息
  column: IColumnConfig
  // 拖动列的索引
  columnIndex: number
  // 是否固定列
  fixed: boolean
}
export interface IScrollArgs {
  // 表格实例对象信息
  $table: Component
  fixed: boolean
  // X轴滚动
  isX: boolean
  // Y轴滚动
  isY: true
  // X轴滚动距离
  scrollLeft: number
  // Y轴滚动距离
  scrollTop: number
  type: 'body' | 'header' | 'footer'
}
export interface ISelectAllArgs {
  $columnIndex: number
  $rowIndex: number
  $seq: string
  // 表格实例对象信息
  $table: Component
  // 勾选状态
  checked: boolean
  // 列信息
  column: IColumnConfig
  // 列下标
  columnIndex: number
  // 表格数据
  data: IRow[]
  fixed: boolean
  isHidden: boolean
  level: number
  // 勾选项的行数据信息
  row: IRow
  // 勾选项的行下标
  rowIndex: number
  // 选中的数据
  selection: IRow[]
  seq: number
}
export interface IToggleExpandChangeArgs {
  // 表格实例对象信息
  $table: Component
  //点击展开行的数据信息对象
  row: IRow
  // 点击展开行的下标
  rowIndex: number
}
export interface IToggleTreeChangeArgs {
  // 表格实例对象信息
  $table: Component
  //点击展开行的数据信息对象
  row: IRow
  // 点击展开行的下标
  rowIndex: number
}
export interface IValidErrorArgs {
  // 校验的单元格信息对象
  cell: Cell
  //校验单元格所在列的列配置信息对象
  column: IColumnConfig
  //校验单元格所在行的信息对象
  row: IRow
  // 校验规则信息对象
  rule: object
}
export interface ISortChangeArgs {
  // 表格实例对象信息
  $grid: Component
  // 列信息
  column: IColumnConfig
  // 排序的字段名
  field: string
  // 排序类型升序或降序
  order: 'asc' | 'desc'
  prop: string
  property: string
}
export interface IClassNameArgs {
  seq: number
  row: IRow
  rowIndex: number
  $rowIndex: number
  column: IColumnConfig
  columnIndex: number
  $columnIndex: number
}
export interface IIndexMethodArgs {
  row: IRow
  rowIndex: number
  column: IColumnConfig
  columnIndex: number
}
export interface IFormatConfig {
  // 列数据源
  data: IColumnConfig[]
  // 内置渲染器类型，与 format-text 属性取值相同
  type:
    | 'money'
    | 'enum'
    | 'select'
    | 'number'
    | 'integer'
    | 'filesize'
    | 'date'
    | 'dateTime'
    | 'longDateTime'
    | 'time'
    | 'longTime'
    | 'yearMonth'
    | 'ellipsis'
    | 'rate'
  // 配置为 true 后，支持动态修改 data 的数据。还可以配置为对象，配置为对象时，对象中可以配置 splitConfig.enabled（是否启用分隔配置）、splitConfig.valueSplit（指定 value 值的分隔符）、splitConfig.textSplit（指定 text 的分隔符）、fetch（列数据异步渲染，请求数据）
  async: true
  // 单元格显示内容的映射
  label: string
  // 单元格取值的映射
  value: string
}
export interface IButtonClick {
  // 表格组件实例对象信息
  $grid: Component
  // 按钮列表信息对象
  button: {
    code: string
    name: string
  }[]
  // 按钮类型
  code: string
}
export interface ISettingConfigs {
  sortType: 'page' | 'all'
  pageSize: number
  columns: {
    property: string
    order: 'asc' | 'desc' | null
    visible: boolean
    sortable: boolean
  }[]
}
export interface ISpanMethodArgs {
  // 行标
  $rowIndex: number
  // 列数据
  column: IColumnConfig
  // 列下标
  columnIndex: number
  // 一个数组，保存了当前合并和计算的数据
  data: (string | number | null)[][]
}

export interface IExportCsvOptions {
  filename: string
  original: boolean
  isHeader: boolean
  data: IRow[]
}

export interface IEditorConfig {
  // 内置组件名称或者自定义组件实例
  component: 'input' | 'select' | Component
  // 传递给组件的事件集合
  events?: {
    [event]: () => void
  }
  // 传递给编辑器组件的属性集合
  attrs?: {
    [prop]: any
  }
  // select 内置组件独有的下拉数据配置项
  options?: object[]
}

export interface IFilterConfig {
  // 设置在显示枚举选项功能是否为多选, 仅在 enumable:true 下有效
  multi: boolean
  // 设置在过滤面板中显示枚举选项
  enumable: boolean
  // 设置在过滤面板中显示默认的筛选条件
  defaultFilter: boolean
  // 设置在过滤面板中显示输入筛选的项
  inputFilter: boolean
  // 设置在显示枚举选项功能(enumable)下制定静态数据源，也可以是函数返回一个Promise对象
  values:
    | {
        // 设置枚举数据的显示值属性字段， 默认'label'
        label: string
        // 设置枚举数据的实际值属性字段， 默认'value'
        value: string
      }[]
    | (() => Promise)
}

export interface IOPConfig {
  editConfig?: IEditConfig
  pagerConfig?: IPagerConfig
  columns: IColumnConfig[]
  data: IRow[]
}

export type IFormatText =
  | 'money'
  | 'enum'
  | 'select'
  | 'number'
  | 'integer'
  | 'filesize'
  | 'date'
  | 'dateTime'
  | 'longDateTime'
  | 'time'
  | 'longTime'
  | 'yearMonth'
  | 'ellipsis'
  | 'rate'
  | 'boole'
  | ((params) => string)

export interface IToolbarSetting {
  remote?: boolean
  storage?: string
  sortable?: Sortable
}

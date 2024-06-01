export type ICascaderPanelNodeValue = string | number

export type ICascaderPanelNodePropValue =
  | ICascaderPanelNodeValue
  | ICascaderPanelNodeValue[]
  | ICascaderPanelNodeValue[][]

export interface ICascaderPanelData {
  value?: ICascaderPanelNodeValue
  label?: string
  children?: ICascaderPanelData[]
  disabled?: boolean
  leaf?: boolean
  [key: string]:
    | ICascaderPanelNodeValue
    | ICascaderPanelData[]
    | string
    | boolean
    | undefined
}

export interface ICascaderPanelConfig {
  emitPath: boolean
  expandTrigger: 'click' | 'hover'
  hoverThreshold: number
  checkStrictly?: boolean
  multiple?: boolean
  lazy: boolean
  lazyLoad: (
    node: ICascaderPanelNode,
    resolve: (dataList: ICascaderPanelData[]) => void,
  ) => void
  value: string
  label: string
  children: string
  disabled: string
  leaf: string
}

export interface ICascaderPanelNode {
  parent: ICascaderPanelNode | null
  level: number
  data: ICascaderPanelData
  config: ICascaderPanelConfig
  uid: number
  value: ICascaderPanelNodeValue
  label: string
  pathNodes: Node[]
  path: ICascaderPanelNodeValue[]
  pathLabels: string[]
  loaded: boolean
  loading: boolean
  hasChildren: boolean
  children: Node[]
  checked?: boolean
  indeterminate?: boolean
  root?: boolean
}

export type ICascaderPanelLazyLoad = (
  node: ICascaderPanelNode,
  resolve: (dataList: ICascaderPanelData[]) => void,
) => void

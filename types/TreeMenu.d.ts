import type { Component } from 'vue'

export interface ITreeNodeVm {
  /**
   * 是否已勾选
   */
  checked: boolean

  /**
   * 子节点
   */
  childNodes: ITreeNodeVm[]

  /**
   * 节点数据
   */
  data: ITreeNodeData

  /**
   * 是否展开
   */
  expanded: boolean

  /**
   * 唯一标识
   */
  id: string | number

  /**
   * 是否半选
   */
  indeterminate: boolean

  /**
   * 是否当前节点
   */
  isCurrent: boolean

  /**
   * 是否叶子节点
   */
  isLeaf: boolean

  /**
   * 层级
   */
  level: number

  /**
   * 是否已加载
   */
  loaded: boolean

  /**
   * 是否加载中
   */
  loading: boolean

  /**
   * 是否可见
   */
  visible: boolean

  /**
   * 是否禁用
   */
  disabled: boolean

  /**
   * 节点显示文本
   */
  label: string
}

export interface ITreeNodeData {
  /**
   *  node-key='id' 设置节点的唯一标识
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

  /**
   * 链接
   */
  url?: string

  /**
   * show-number 时展示的字段
   */
  number?: number | string

  /**
   * 自定义每个节点的图标
   */
  customIcon: Component
}

export interface IProps {
  label?: string
  children?: string
  disabled: string
  isLeaf: string
}

/**
 * Promise 的 resolve 回调函数
 */
export type IResolveType = (data: ITreeNodeData) => void

/**
 * 拖拽节点相对目标节点的位置
 */
export type IDropType = before | after | inner | none

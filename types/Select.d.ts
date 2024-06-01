import type { Component } from 'vue'

export interface IOption {
  value?: string | number
  label?: string
  disabled?: boolean
  icon?: Component
  required?: boolean
}

export interface ICacheItem {
  frequency: number
  key: string
  time: number
}

export interface ICacheOp {
  /**
   * 本地缓存的唯一 key 值
   */
  key: string
  /**
   * 排序的字段，默认 frequency (频次)
   */
  sortBy?: 'frequency' | 'time'
  /**
   * 排序方式，默认 desc (降序)
   */
  sort?: 'desc' | 'asc'
  /**
   * 数据中的唯一标识的 key 名称,默认 value
   */
  dataKey?: string
  /**
   * 个性化高亮 class 名称，默认：memorize-highlight
   */
  highlightClass?: string
  /**
   * 高亮个性化的条数,默认：Infinity
   */
  highlightNum?: number
  /**
   * 存储个性化的条数,默认：Infinity
   */
  cacheNum?: number
  /**
   * 本地存储序列化方法,默认：JSON.stringify
   */
  serialize?: () => string
  /**
   * 本地存储序反列化方法，默认：JSON.parse
   */
  deserialize?: () => ICacheItem[]
}

export interface IGridOption<T = any, U = any> {
  /**
   * 表格数据，用法同 Grid
   */
  data: T[]
  /**
   * 列配置，用法同 Grid
   */
  columns: U[]
}

export interface ITreeNode {
  /**
   * 默认树节点的文本字段
   */
  label: string
  /**
   * 树节点唯一标识
   */
  id: number | string
  /**
   * 子节点
   */
  children: ITreeNode[]
}

export interface ITreeOption {
  /**
   * 树数据，用法同 Tree
   */
  data: ITreeNode[]
}

export type IPlacement =
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

import type { Component } from 'vue'

export interface ITimelineItem {
  /**
   * 节点名称
   */
  name: string
  activeColor: 'success' | 'warning' | 'error' | Component
  /**
   * 节点时间
   */
  time?: string
  /**
   * 是否异常状态
   */
  error?: boolean
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 节点类型
   */
  type?: ITimelineItemType
}

export type ITimelineItemType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'

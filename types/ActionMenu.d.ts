import type { Component } from 'vue'

export interface IItemData {
  /**
   * 菜单项文本
   */
  label?: string
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 是否显示分割线
   */
  divided?: boolean
  /**
   * 菜单项子集
   */
  children?: IItemData[]
  /**
   * 菜单项图标
   */
  icon?: Component
}

export interface IItemClickParams {
  /**
   * 菜单项配置
   */
  itemData: IItemData
  /**
   * 菜单项实例
   */
  vm: {
    selected: boolean
    textField: string
    tipPosition: string
    $el: HTMLElement
  }
}

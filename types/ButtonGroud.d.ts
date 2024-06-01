import type { Component } from 'vue'

export interface IButtonGroupData {
  /**
   * 显示文本
   */
  text: string
  /**
   * 选中的值
   */
  value: number | number
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 配置选块角标
   */
  sup?: {
    /**
     * 角标文本
     */
    text: string
    /**
     * 角标的自定义class
     */
    class?: string
    /**
     * 自定义插槽名称，提供后可在button-group内使用对应的插槽自定义角标内容
     */
    slot?: string
    icon?: Component
  }
}

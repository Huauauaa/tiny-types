export type IPosition = 'top' | 'right' | 'bottom' | 'left'

export type ITabStyle = 'card' | 'border-card' | 'button-card' | ''

export interface ITooltipProps {
  /**
   * 参照tooltip的props进行配置
   */
  effect?: string
  placement?: string
  visible?: string
  [propName: string]: any
}

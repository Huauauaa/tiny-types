export interface IMenuOption {
  options: IItemData[]
  textField?: string
  popperClass?: string
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
}

export interface IItemClickParam {
  itemData: IItemData
  /**
   * dropdownItem 组件的实例
   */
  vm: {
    selected: boolean
    textField: string
    tipPosition: string
    $el: HTMLElement
  }
}

export interface IItemData {
  label?: string
  disabled?: boolean
  divided?: boolean
}

export type IButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text'

export type IPlacementType =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'

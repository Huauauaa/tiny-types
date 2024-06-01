export interface IOptionsItemTo {
  path: string
}

export interface IOptionsItem {
  label?: string
  to?: IOptionsItemTo
  replace?: boolean
  [customProp: string]: string
}

export interface ISelectValue {
  event: Event
  link: HTMLElement
  option: IOptionsItem
  replace: boolean
  to?: IOptionsItemTo
}

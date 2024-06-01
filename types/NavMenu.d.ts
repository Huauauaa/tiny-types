export interface IMenuItem {
  id: string
  isFullUrl: boolean
  pid: string
  route: string
  target: string
  title: string
  url: string
}

export interface IDataItem {
  title: string
  url: string
  children?: IDataItem[]
}

export interface IFields {
  textField: string
  urlField: string
  key?: string
}

export type IOverflow = 'auto' | 'retract' | 'fixed' | 'hidden'

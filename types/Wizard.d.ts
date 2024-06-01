export interface IDataItem {
  name: string
  status: string
  showNode?: boolean
  content?: string
  imgUrl?: string
  users?: string
  userName?: string
  roleNumber?: string
  date?: string
  values?: IDataItemValuesItem[]
}

export interface IDataItemValuesItem {
  text: string
  value: string
}

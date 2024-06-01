export type ITagGroupDataItem = {
  name: string
  type?: 'success' | 'info' | 'warning' | 'danger'
}

export type ITagGroupItemClick = (
  item: ITagGroupDataItem,
  index: number,
  event: Event,
) => void

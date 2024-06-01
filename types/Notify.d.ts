export type INotifyTitle =
  | string
  | ((h: Vue.h, params: { titleClass: string; vm }) => JSX.Element)

export type INotifyMessage =
  | string
  | ((h: Vue.h, params: { messageClass: string; vm }) => JSX.Element)

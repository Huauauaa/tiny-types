export interface IConditions {
  field: string
  label: string
}

export type IRemoteSearch = ({
  page: { currentPage: number, pageSize: number },
  conditions: { [K in IConditions['field']]: string },
}) => void

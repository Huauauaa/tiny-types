export interface IAutocompleteSuggestionItem {
  [key: string]: string | undefined
  value?: string
}

export type IAutocompletePlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'

export type IAutocompleteFetchSuggestions = (
  queryString: string,
  callback: (suggestions: IAutocompleteSuggestionItem[]) => void,
) => void

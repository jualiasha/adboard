import { ISearchForm } from "../../../@types"

export const SEARCH_INPUT = "SEARCH_INPUT"

export interface InitializeSearch {
  type: typeof SEARCH_INPUT
  searchForm: ISearchForm
}

export type SearchActionTypes = InitializeSearch

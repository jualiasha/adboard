import { SEARCH_INPUT } from "./actionTypes/searchActionTypes"

export const InitializeSearch = (event:any) => {
    return {
      const searchForm={[event.target.name]:event.target.value}
    type: SEARCH_INPUT,
    searchForm,
  }
}

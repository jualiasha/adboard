import { resetSearchForm } from "../../utils/reset"
import {
  SEARCH_INPUT,
  SearchActionTypes,
} from "../actions/actionTypes/searchActionTypes"

const DEFAULT_STATE = {
    searchForm: resetSearchForm()
}

const searchReducer = (state = DEFAULT_STATE, action: SearchActionTypes) => {
  switch (action.type) {
    case SEARCH_INPUT:
          return { ...state, action.searchForm }
      default:
          return state
  }
}

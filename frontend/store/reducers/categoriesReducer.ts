import { resetCategories } from "../../utils/reset"
import {
  CategoryActionTypes,
  INIT_CATEGORIES,
} from "../actions/actionTypes/categoryActionTypes"

const DEFAULT_STATE = resetCategories()

const categoriesReducer = (
  state = DEFAULT_STATE,
  action: CategoryActionTypes
) => {
  switch (action.type) {
    case INIT_CATEGORIES:
      return action.categories
    default:
      return state
  }
}

export default categoriesReducer

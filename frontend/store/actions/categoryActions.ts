import { getCategories } from "../../utils/api"
import { INIT_CATEGORIES } from "./actionTypes/categoryActionTypes"

export const initializeCategories = () => {
  return async (dispatch) => {
    const categories = await getCategories()
    dispatch({
      type: INIT_CATEGORIES,
      categories,
    })
  }
}

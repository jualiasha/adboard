import { Dispatch } from "react"
import { getCategories } from "../../utils/api"
import { INIT_CATEGORIES } from "./actionTypes/categoryActionTypes"

export const initializeCategories = () => {
  return async (dispatch: Dispatch<any>) => {
    const categories = await getCategories()
    dispatch({
      type: INIT_CATEGORIES,
      categories,
    })
  }
}

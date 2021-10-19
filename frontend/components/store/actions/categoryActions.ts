import { getCategories } from "../../../utils/api"

export const INIT_CATEGORIES = "INIT_CATEGORIES"

export const initializeCategories = () => {
  return async (dispatch) => {
    const categories = await getCategories()
    dispatch({
      type: INIT_CATEGORIES,
      data: categories,
    })
  }
}

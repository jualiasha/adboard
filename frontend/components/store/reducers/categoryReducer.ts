import { INIT_CATEGORIES } from "../actions/categoryActions"

const categoryReducer: any = (state = [], action) => {
  switch (action.type) {
    case INIT_CATEGORIES:
      return action.data
    default:
      return state
  }
}

export default categoryReducer

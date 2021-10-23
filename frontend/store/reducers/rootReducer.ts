import { combineReducers } from "redux"
import adsReducer from "./adsReducer"
import categoriesReducer from "./categoriesReducer"
import messageReducer from "./messageReducer"

const rootReducer = combineReducers({
  ads: adsReducer,
  categories: categoriesReducer,
  message: messageReducer,
})

export default rootReducer

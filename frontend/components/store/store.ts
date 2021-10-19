import { composeWithDevTools } from "redux-devtools-extension"
import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"

import adsReducer from "./reducers/adsReducer"
import categoryReducer from "./reducers/categoryReducer"
import messageReducer from "./reducers/messageReducer"

const reducer = combineReducers({
  ads: adsReducer,
  categories: categoryReducer,
  message: messageReducer,
})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store

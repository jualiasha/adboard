import { UserAdsActionTypes } from "./actionTypes/adsActionTypes"
import { CategoryActionTypes } from "./actionTypes/categoryActionTypes"
import { MessageActionTypes } from "./actionTypes/messageActionTypes"
import { SearchActionTypes } from "./actionTypes/searchActionTypes"

export type AppActions =
  | UserAdsActionTypes
  | CategoryActionTypes
  | MessageActionTypes
  | SearchActionTypes

import { UserAdsActionTypes } from "./actionTypes/adsActionTypes"
import { CategoryActionTypes } from "./actionTypes/categoryActionTypes"
import { MessageActionTypes } from "./actionTypes/messageActionTypes"

export type AppActions =
  | UserAdsActionTypes
  | CategoryActionTypes
  | MessageActionTypes

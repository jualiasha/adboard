import { resetUserAds } from "../../utils/reset"
import {
  INIT_ADS,
  UserAdsActionTypes,
} from "../actions/actionTypes/adsActionTypes"

const DEFAULT_STATE = resetUserAds()

const adsReducer = (state = DEFAULT_STATE, action: UserAdsActionTypes) => {
  switch (action.type) {
    case INIT_ADS:
      return action.userAds
    default:
      return state
  }
}

export default adsReducer

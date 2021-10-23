import { Dispatch } from "react"
import { getAds } from "../../utils/api"
import { INIT_ADS } from "./actionTypes/adsActionTypes"

export const initializeAds = (url?: string) => {
  return async (dispatch: Dispatch<any>) => {
    const userAds = await getAds(url)
    dispatch({
      type: INIT_ADS,
      userAds,
    })
  }
}

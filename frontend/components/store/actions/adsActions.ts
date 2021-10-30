import { getAds } from "../../../utils/api"

export const INIT_ADS = "INIT_ADS"

export const initializeAds = () => {
  return async (dispatch) => {
    const ads = await getAds()
    dispatch({
      type: INIT_ADS,
      data: ads,
    })
  }
}

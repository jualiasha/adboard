import { IUserAd } from "../../../@types"

export const INIT_ADS = "INIT_ADS"

export interface InitializeAds {
  type: typeof INIT_ADS
  userAds: IUserAd[]
}

export type UserAdsActionTypes = InitializeAds

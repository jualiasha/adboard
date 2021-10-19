import { INIT_ADS } from "../actions/adsActions"

const adsReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_ADS:
      return action.data
    default:
      return state
  }
}

export default adsReducer

import { resetMessage } from "../../utils/reset"
import {
  ADD_MESSAGE,
  MessageActionTypes,
  REMOVE_MESSAGE,
} from "../actions/actionTypes/messageActionTypes"

const DEFAULT_STATE = {
  message: resetMessage(),
}

const messageReducer = (state = DEFAULT_STATE, action: MessageActionTypes) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        message: action.message,
      }
    case REMOVE_MESSAGE:
      return {
        ...state,
        message: action.message,
      }
    default:
      return state
  }
}

export default messageReducer

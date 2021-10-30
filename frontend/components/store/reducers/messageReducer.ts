import { ADD_MESSAGE, REMOVE_MESSAGE } from "../actions/messageActions"

const DEFAULT_STATE = {
  message: { messageText: "", bgColor: "" },
}

const messageReducer = (state = DEFAULT_STATE, action) => {
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

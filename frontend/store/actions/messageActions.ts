import { ADD_MESSAGE, REMOVE_MESSAGE } from "./actionTypes/messageActionTypes"

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message,
  }
}

export function removeMessage(message) {
  return {
    type: REMOVE_MESSAGE,
    message,
  }
}

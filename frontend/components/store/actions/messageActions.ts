export const ADD_MESSAGE = "ADD_MESSAGE"
export const REMOVE_MESSAGE = "REMOVE_MESSAGE"

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

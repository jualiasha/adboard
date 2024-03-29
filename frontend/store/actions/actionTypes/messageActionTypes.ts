export const ADD_MESSAGE = "ADD_MESSAGE"
export const REMOVE_MESSAGE = "REMOVE_MESSAGE"

export interface AddMessage {
  type: typeof ADD_MESSAGE
  message
}

export interface RemoveMessage {
  type: typeof REMOVE_MESSAGE
  message
}

export type MessageActionTypes = AddMessage | RemoveMessage

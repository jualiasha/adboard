import axios from "axios"

export function setHeader(contentType, token) {
  axios.defaults.headers.post["Content-Type"] = contentType
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common["Authorization"]
  }
}

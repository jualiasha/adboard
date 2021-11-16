import { IFormField } from "../../@types"

export const loginFormFields: IFormField[] = [
  {
    id: "email",
    label: "Email",
    type: "email",
    name: "email",
    required: true,
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    name: "password",
    required: true,
  },
]

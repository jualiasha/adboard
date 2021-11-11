import { Box } from "@mui/material"
import React, { FormEvent, useState } from "react"
import { IFormField, ILoginFormStateProps } from "../../@types"
import Button from "../Buttons/Button"
import Form from "../Form/Form"
import Input from "../Input/Input"
import { loginFormFields } from "./loginFormFields"

const LoginForm = () => {
  const [loginFormState, updateLoginFormState] = useState<ILoginFormStateProps>(
    {
      email: "",
      password: "",
    }
  )

  const handleChange = (event: any) => {
    updateLoginFormState({
      ...loginFormState,
      [event.target.name]: event.target.value,
    } as Pick<ILoginFormStateProps, keyof ILoginFormStateProps>)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
  }
  return (
    <Form handleSubmit={(event: FormEvent) => handleSubmit(event)}>
      <Box p={2}>
        {loginFormFields.map((formField: IFormField) => {
          return (
            <Input
              key={formField.id}
              inputId={formField.id}
              inputLabel={formField.label}
              inputType={formField.type}
              inputName={formField.name}
              required={formField.required}
              errorText={""}
              readOnly={false}
              disabled={false}
              variant="outlined"
              inputHandler={(event: any) => handleChange(event)}
            />
          )
        })}
        <Button type="submit" variant="primary" size={"sm"} disabled={false}>
          Login
        </Button>
      </Box>
    </Form>
  )
}

export default LoginForm

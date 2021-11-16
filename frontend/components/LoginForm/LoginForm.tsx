import { Box, TextField } from "@mui/material"
import { useRouter } from "next/router"
import React, { FormEvent, useState } from "react"
import { IFormField, ILoginFormStateProps } from "../../@types"
import Button from "../Buttons/Button"
import Form from "../Form/Form"
import { loginFormFields } from "./loginFormFields"

const LoginForm = () => {
  const router = useRouter()
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

    router.push("/")
  }
  return (
    <Form handleSubmit={(event: FormEvent) => handleSubmit(event)}>
      <Box p={2}>
        {loginFormFields.map((formField: IFormField) => {
          return (
            <TextField  />
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

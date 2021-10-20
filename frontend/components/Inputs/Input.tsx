import React, { FC } from "react"
import { TextInputTypes } from "../../@types"

interface IInputProps {
  inputType: TextInputTypes
  inputLabel: string
  inputId: string
  inputName: string
  disabled: boolean
  readOnly: boolean
  errorText: string
  required: boolean
  inputHandler: () => void
  variant: string
}

const Input: FC<IInputProps> = ({
  inputName,
  inputId,
  inputLabel,
  disabled,
  readOnly,
  inputType,
  inputHandler,
  errorText,
  required,
  variant,
}) => {
  return (
    <>
      <label className={variant} htmlFor={inputId}>
        {inputLabel}
      </label>
      <input
        type={inputType}
        id={inputId}
        name={inputName}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        onInput={inputHandler}
      />
      {errorText && <p>{errorText}</p>}
    </>
  )
}

export default Input

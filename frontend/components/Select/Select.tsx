import { MenuItem, TextField } from "@mui/material"
import React from "react"
import { Cities, InputField } from "../../@types"

interface ISelectProps {
  inputField: InputField
  value: any
  handleChange: (event: any) => void
}

const Select = ({ inputField, value, handleChange }) => {
  const { id, type, name, label, options, required, disabled } = inputField
  return (
    <TextField
      className="filter__category"
      select={type === "select" ? true : false}
      name={name}
      label={label}
      id={id}
      value={value}
      onChange={handleChange}
      required={required}
      disabled={disabled}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default Select

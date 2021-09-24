import React, { useState } from "react"
import { Box, InputAdornment, TextField, MenuItem } from "@mui/material"
import { citiesEn } from "../utils/cities"
import SearchIcon from "@mui/icons-material/Search"

export default function InputWithIcon() {
  const [city, setCity] = useState("All Finland")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={city}
        onChange={handleChange}
        helperText="Select city"
      >
        {citiesEn.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  )
}

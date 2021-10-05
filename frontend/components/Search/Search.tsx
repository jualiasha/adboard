import React, { useState } from "react"
import { Box, InputAdornment, TextField, MenuItem } from "@mui/material"
import { citiesEn } from "../../utils/cities"
import SearchIcon from "@mui/icons-material/Search"

export default function Search() {
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
        {citiesEn.map((cityname) => (
          <MenuItem key={cityname} value={cityname}>
            {cityname}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  )
}

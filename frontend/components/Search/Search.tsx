import React, { useState } from "react"
import { Box, InputAdornment, TextField, MenuItem } from "@mui/material"
import { citiesEn } from "../../utils/cities"
import Icon from "../Icon/Icon"

export default function Search() {
  const [city, setCity] = useState("All Finland")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }

  return (
    <Box className="header__searchBox">
      <TextField
        className="header__searchBox__search"
        /* id="input-with-icon-textfield" */
        label=""
        placeholder="Type here to search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon icon="search" variant="searchIcon" />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <TextField
        /* id="outlined-select-currency" */
        className="header__searchBox__select"
        select
        label=""
        value={city}
        onChange={handleChange}
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

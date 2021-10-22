import { Box, InputAdornment, MenuItem, TextField } from "@mui/material"
import React, { FC, FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { ISearchForm } from "../../@types"
import { citiesEn } from "../../utils/cities"
import { resetSearchForm } from "../../utils/reset"
import Icon from "../Icon/Icon"

const SearchForm: FC = () => {
  const dispatch = useDispatch()
  const [searchForm, updateSearchForm] = useState<ISearchForm>(() =>
    resetSearchForm()
  )
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    // dispatch(getUserAds());
  }
  const handleChange = (event: any) => {
    updateSearchForm({ ...searchForm, [event.target.name]: event.target.value })
  }
  return (
    <form onSubmit={(event: FormEvent) => handleSubmit(event)}>
      <Box className="header__searchBox">
        <TextField
          className="header__searchBox__search"
          /* id="input-with-icon-textfield" */
          label=""
          placeholder="Type here to search"
          value={searchForm.title}
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
          value={searchForm.city}
          onChange={handleChange}
        >
          {citiesEn.map((cityname) => (
            <MenuItem key={cityname} value={cityname}>
              {cityname}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </form>
  )
}

export default SearchForm

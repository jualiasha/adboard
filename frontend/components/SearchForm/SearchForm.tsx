import { Box, InputAdornment, MenuItem, TextField } from "@mui/material"
import React, { FC, FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { ISearchForm } from "../../@types"
import { initializeAds } from "../../store/actions/adsActions"
import { citiesEn } from "../../utils/cities"
import { resetSearchForm } from "../../utils/reset"
import { SearchQuery } from "../../utils/searchQueryClass"
import Icon from "../Icon/Icon"

const SearchForm: FC = () => {
  const dispatch = useDispatch()
  const [searchForm, updateSearchForm] = useState<ISearchForm>(() =>
    resetSearchForm()
  )

  const handleSubmit = (event: any) => {
    event.preventDefault()
    const searchFormQuery = new SearchQuery({
      ...searchForm,
      [event.target.name]: event.target.value,
    }).searchQuery()
    const searchFormQUeryString =
      searchFormQuery.generateQueryString(searchFormQuery)

    dispatch(
      /* initializeAds(
        `/user-ads?title=${searchForm.title}&city=${searchForm.city}`
      ) */
      initializeAds(`/user-ads?${searchFormQUeryString}`)
    )
  }
  const handleChange = (event: any) => {
    updateSearchForm({ ...searchForm, [event.target.name]: event.target.value })
    const searchFormQuery = new SearchQuery({
      ...searchForm,
      [event.target.name]: event.target.value,
    }).searchQuery()
    const searchFormQUeryString =
      searchFormQuery.generateQueryString(searchFormQuery)
    console.log(searchFormQUeryString)
    dispatch(
      /* initializeAds(
        `/user-ads?title=${searchForm.title}&city=${searchForm.city}`
      ) */
      initializeAds(`/user-ads${searchFormQUeryString}`)
    )
  }
  return (
    <form onSubmit={(event: FormEvent) => handleSubmit(event)}>
      <button type="submit" style={{ display: "none" }}></button>

      <Box className="header__searchBox">
        <TextField
          className="header__searchBox__search"
          onChange={handleChange}
          label=""
          name="title"
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
          className="header__searchBox__select"
          select={true}
          label=""
          value={searchForm.city}
          name="city"
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

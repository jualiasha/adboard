import { Grid, MenuItem, TextField } from "@mui/material"
import React, { FC, useState } from "react"
import { ICategory } from "../@types"
import { getCategories } from "../utils/api"
import { citiesEn } from "../utils/cities"

interface FilterProps {
  categories: ICategory[]
}

const filter: FC<FilterProps> = ({ categories }) => {
  const [values, setValues] = useState({
    city: "All Finland",
    category: "",
    subcategory: "",
  })

  let categoryValues = categories.map((category) => {
    return category.categoryName
  })

  console.log(categoryValues)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  return (
    <div className="filter">
      <form>
        <Grid container>
          <h1 className="filter__heading">Filter</h1>
          <TextField
            /* id="outlined-select-currency" */
            className="header__searchBox__select"
            select
            name="city"
            label=""
            value={values.city}
            onChange={handleChange}
          >
            {citiesEn.map((cityname) => (
              <MenuItem key={cityname} value={cityname}>
                {cityname}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid container justifyContent="space-between" mt={5}>
          <TextField
            /* id="outlined-select-currency" */
            className="filter__category"
            select
            name="category"
            label="...Category"
            value={values.category}
            onChange={handleChange}
          >
            {categoryValues?.map((categoryName) => (
              <MenuItem key={categoryName} value={categoryName}>
                {categoryName}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            /* id="outlined-select-currency" */
            className="filter__category"
            select
            name="subcategory"
            label="...Subcategory"
            value={values.subcategory}
            onChange={handleChange}
          >
            {categoryValues?.map((categoryName) => (
              <MenuItem key={categoryName} value={categoryName}>
                {categoryName}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </form>
    </div>
  )
}
export async function getStaticProps() {
  const categories = await getCategories()

  return { props: { categories } }
}
export default filter

import { Grid } from "@mui/material"
import React, { FC, useState } from "react"
import { ICategory, IFilterForm } from "../../@types"

import { citiesEn } from "../../utils/cities"
import Select from "../Select/Select"
import { resetFilterForm } from "../../utils/reset"
import axios from "axios"

interface FilterFormProps {
  categories: ICategory[]
}

const FilterForm: FC<FilterFormProps> = ({ categories }) => {
  const [filterForm, setFilterForm] = useState<IFilterForm>(() =>
    resetFilterForm()
  )
  const [subcategories, setSubcategories] = useState<string[]>(() => [])
  console.log(filterForm)

  const [subSection, setSubSection] = useState<string[]>(() => [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterForm({ ...filterForm, [event.target.name]: event.target.value })
    if (event.target.name === "category") {
      const selectedSubcategories = categories
        .filter((category: ICategory) => {
          return category.categoryName === event.target.value
        })
        .map((category) => {
          return category.subcategories
        })

      setSubcategories(() =>
        selectedSubcategories[0].map(
          (subcategory) => subcategory.subCategoryName
        )
      )
    }
    if (event.target.name === "subcategory") {
      axios
        .get(
          `http://localhost:1337/sub-sections?subcategoryName=${event.target.value}`
        )
        .then((resp: any) => {
          setSubSection(() =>
            resp.data.map((subsections) => subsections.subsection)
          )
        })
      // axios get user ads
      //http://localhost:1337/subcategories?subCategoryName=Appartments
      // resp.data[0].user_ads user_ad
    }
  }

  return (
    <div className="filter">
      <form>
        <Grid container>
          <h1 className="filter__heading">Filter</h1>
          <Select
            inputField={{
              id: "city",
              name: "city",
              label: "City",
              type: "select",
              required: true,
              options: citiesEn,
            }}
            value={filterForm.city}
            handleChange={(event: any) => handleChange(event)}
          />
        </Grid>
        <Grid container justifyContent="space-between" mt={5}>
          <Select
            inputField={{
              id: "category",
              name: "category",
              label: "Category",
              type: "select",
              required: true,
              options: categories.map((category) => category.categoryName),
            }}
            value={filterForm.category}
            handleChange={(event: any) => handleChange(event)}
          />

          <Select
            inputField={{
              id: "subcategory",
              name: "subcategory",
              label: "Subcategory",
              type: "select",
              required: true,
              options: subcategories,
            }}
            value={filterForm.subcategory}
            handleChange={(event: any) => handleChange(event)}
          />
          {subSection.length > 0 ? (
            <Select
              inputField={{
                id: "subSection",
                name: "subSection",
                label: "Section",
                type: "select",
                required: true,
                options: subSection,
              }}
              value={filterForm.subSection}
              handleChange={(event: any) => handleChange(event)}
            />
          ) : (
            <div></div>
          )}
        </Grid>
        <Grid container justifyContent="space-between" mt={3}></Grid>
      </form>
    </div>
  )
}

export default FilterForm

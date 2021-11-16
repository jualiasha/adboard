import { Grid } from "@mui/material"
import React, { FC, FormEvent } from "react"
import { ICategory, IFilterForm } from "../../@types"
import { citiesEn } from "../../utils/cities"
import Form from "../Form/Form"
import Select from "../Select/Select"

interface FilterFormProps {
  categories: ICategory[]
  filterForm: IFilterForm
  handleChange: (event: any) => void
  subcategories: string[]
  subSection: string[]
}

const FilterForm: FC<FilterFormProps> = ({
  categories,
  filterForm,
  handleChange,
  subcategories,
  subSection,
}) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }
  return (
    <div className="filter">
      <Form handleSubmit={(event: FormEvent) => handleSubmit(event)}>
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
      </Form>
    </div>
  )
}

export default FilterForm

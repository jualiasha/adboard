import React, { FC } from "react"
import { useSelector } from "react-redux"
import FilterForm from "../components/FilterForm/FilterForm"
import { AppState } from "../store/store"

const FilterPage: FC = () => {
  const categories = useSelector((state: AppState) => state.categories)

  return (
    <>
      <FilterForm categories={categories} />
    </>
  )
}

export default FilterPage

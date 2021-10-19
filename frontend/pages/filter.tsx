import React, { FC } from "react"
import { useSelector } from "react-redux"
import FilterForm from "../components/Filter/FilterForm"

const filter: FC = () => {
  const categories = useSelector((state: any) => state.categories)

  return (
    <>
      <FilterForm categories={categories} />
    </>
  )
}

export default filter

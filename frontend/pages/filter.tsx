import axios from "axios"
import React, { FC, useState } from "react"
import { useSelector } from "react-redux"
import { ICategory, IFilterForm, IUserAd } from "../@types"
import FeedLayout from "../components/DoubleFeedLayout/DoubleFeedLayout"
import FilterForm from "../components/FilterForm/FilterForm"
import SimpleFeedLayout from "../components/SimpleFeedLayout/SimpleFeedLayout"
import { AppState } from "../store/store"
import { resetFilterForm } from "../utils/reset"

const FilterPage: FC = () => {
  const categories = useSelector((state: AppState) => state.categories)

  const ads = useSelector((state: AppState) => state.ads)
  const [filteredAds, setFilteredAds] = useState<IUserAd[] | []>(() => [])
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
    }
  }
  console.log(filterForm.subSection)
  if (filterForm.subSection) {
    axios
      .get(
        `http://localhost:1337/user-ads?city=${filterForm.city}&&subcategory=${filterForm.subcategory}&&subSection=${filterForm.subSection}`
      )
      .then((resp: any) => setFilteredAds(resp.data))
  }

  /* console.log(filteredAds) */
  return (
    <>
      <FilterForm
        filterForm={filterForm}
        categories={categories}
        subcategories={subcategories}
        subSection={subSection}
        handleChange={(event) => handleChange(event)}
      />
      <SimpleFeedLayout ads={filteredAds} />
    </>
  )
}

export default FilterPage

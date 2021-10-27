import { Collapse } from "@mui/material"
import React, { FC, useState } from "react"
import { useSelector } from "react-redux"
import { ICategory, ISubCategory } from "../../@types"
import CategoryLink from "../CategoryLink/CategoryLink"
import SubcategoryMenu from "../SubcategoryMenu/SubcategoryMenu"

const CategoryMenu: FC = () => {
  const categories = useSelector((state: any) => state.categories)
  const [menuOpen, setMenuOpen] = useState<boolean>(() => false) //open /close categories menu
  const [checked, setChecked] = useState<boolean>(() => false) //collapsing
  const [subcategories, setSubcategories] = useState<ISubCategory[] | null>(
    () => null
  ) //setting subcategories for each category in menu
  const [categoryName, setCategoryName] = useState<string | null>(() => null) //getting categoryName of the clicked category

  const menuOpenHandler = (category: ICategory) => {
    setSubcategories(() => category.subcategories)
    setCategoryName(() => category.slug)
    setChecked(() => true)
    setMenuOpen(() => true)
  }

  const menuCloseHandler = () => {
    setChecked(() => false)
    setMenuOpen(() => false)
  }

  return (
    <>
      <div className="categoryLinks">
        {categories[0].imageSource &&
          categories.map((category: ICategory) => {
            return (
              <CategoryLink
                categoryName={category.categoryName}
                key={category._id}
                imageSource={category.imageSource}
                click={() => menuOpenHandler(category)}
                category={category}
              />
            )
          })}
      </div>
      {menuOpen && (
        <Collapse in={checked}>
          <SubcategoryMenu
            categoryName={categoryName}
            subcategories={subcategories}
            variant="homePage"
            closeClick={menuCloseHandler}
          />
        </Collapse>
      )}
    </>
  )
}

export default CategoryMenu

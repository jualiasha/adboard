import Link from "next/link"
import React, { FC } from "react"
import { ISubCategory } from "../../@types"
import CloseIcon from "@mui/icons-material/Close"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

interface SubcategoryMenuProps {
  subcategories: ISubCategory[]
  variant: string
  closeClick: () => void
}

const SubcategoryMenu: FC<SubcategoryMenuProps> = ({
  variant,
  subcategories,
  closeClick,
}) => {
  return (
    <div className={`${variant}__subcategoryMenu`}>
      <CloseIcon
        className={`${variant}__subcategoryMenu__close`}
        onClick={closeClick}
      />
      <ul className={`${variant}__subcategoryMenu__list`}>
        {subcategories.map((subcategory) => {
          return (
            <li
              key={subcategory._id}
              className={`${variant}__subcategoryMenu__item`}
            >
              <Link href={`/subcategories/${subcategory.slug}`}>
                <a className={`${variant}__subcategoryMenu__item__link`}>
                  <ArrowForwardIosIcon
                    className={`${variant}__subcategoryMenu__item__arrow`}
                  />
                  {subcategory.subCategoryName}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SubcategoryMenu

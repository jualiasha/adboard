import Link from "next/link"
import React, { FC } from "react"
import { ISubCategory } from "../../@types"

import Icon from "../Icon/Icon"

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
      {/* <CloseIcon
        className={`${variant}__subcategoryMenu__close`}
        onClick={closeClick}
      /> */}
      <Icon icon="close" variant="closeIcon" click={closeClick} />
      <ul className={`${variant}__subcategoryMenu__list`}>
        {subcategories.map((subcategory) => {
          return (
            <li
              key={subcategory._id}
              className={`${variant}__subcategoryMenu__item`}
            >
              <Link href={`/subcategories/${subcategory.slug}`}>
                <a className={`${variant}__subcategoryMenu__item__link`}>
                  <Icon icon="arrow" variant="menuIcon" />

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

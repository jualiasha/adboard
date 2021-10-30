import React, { FC } from "react"
import { CategoryNames, ICategory } from "../../@types"
import NextImage from "../Image"

interface ICategoryLinkProps {
  categoryName: CategoryNames
  imageSource: string
  click: (category: ICategory) => void
  category: ICategory
}
const CategoryLink: FC<ICategoryLinkProps> = ({
  imageSource,
  categoryName,
  click,
  category,
}) => {
  return (
    <div className="categoryLinks__box" onClick={() => click(category)}>
      <div className="categoryLinks__box__image">
        <NextImage media={imageSource} src={imageSource} alt={categoryName} />
      </div>
      <p className="categoryLinks__box__text">{categoryName}</p>
    </div>
  )
}

export default CategoryLink

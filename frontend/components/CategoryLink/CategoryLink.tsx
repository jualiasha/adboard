import React, { FC } from "react"
import { CategoryNames } from "../../@types"
import NextImage from "../Image"

interface ICategoryLinkProps {
  categoryName: CategoryNames
  imageSource: string
  click: () => void
}
const CategoryLink: FC<ICategoryLinkProps> = ({
  imageSource,
  categoryName,
  click,
}) => {
  return (
    <div className="categoryLinks__box" onClick={click}>
      <div className="categoryLinks__box__image">
        <NextImage media={imageSource} src={imageSource} alt={categoryName} />
      </div>
      <p className="categoryLinks__box__text">{categoryName}</p>
    </div>
  )
}

export default CategoryLink

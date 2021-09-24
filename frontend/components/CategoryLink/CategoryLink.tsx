import React, { FC } from "react"
import { ButtonTypes } from "../../@types"
import Link from "next/link"

interface ICategoryLinkProps {
  type: ButtonTypes
  variant: string
  categoryText: string
  imageSource: string
  categoryName: string
}

const CategoryLink: FC<ICategoryLinkProps> = ({
  imageSource,
  categoryText,
  variant,
  categoryName,
}) => {
  return (
    <Link href={`/categories/${categoryName}`}>
      <div className="categoryLink">
        <img src={imageSource} alt={categoryText}></img>
        <p className={`categoryLink__${variant}`}>{categoryText}</p>
      </div>
    </Link>
  )
}

export default CategoryLink

import React, { FC } from "react"
import Link from "next/link"
import { CategoryNames } from "../../@types"
import NextImage from "../Image"

interface ICategoryLinkProps {
  categoryName: CategoryNames
  imageSource: string
  slug: string
}

const CategoryLink: FC<ICategoryLinkProps> = ({
  imageSource,
  categoryName,
  slug,
}) => {
  return (
    <Link href={`/categories/${slug}`}>
      <div className="categoryLink">
        <NextImage media={imageSource} src={imageSource} alt={categoryName} />
        <p className="categoryLink__text">{categoryName}</p>
      </div>
    </Link>
  )
}

export default CategoryLink

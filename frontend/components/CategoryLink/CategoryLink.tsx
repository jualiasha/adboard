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
      <a>
        <div className="categorylinks__box">
          <NextImage
            media={imageSource}
            src={imageSource}
            alt={categoryName}
            className="categorylinks__box__image"
          />
          <p className="categorylinks__box__text">{categoryName}</p>
        </div>
      </a>
    </Link>
  )
}

export default CategoryLink

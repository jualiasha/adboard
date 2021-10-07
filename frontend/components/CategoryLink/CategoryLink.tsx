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
        <div className="categoryLinks__box">
          <div className="categoryLinks__box__image">
            <NextImage
              media={imageSource}
              src={imageSource}
              alt={categoryName}
            />
          </div>
          <p className="categoryLinks__box__text">{categoryName}</p>
        </div>
      </a>
    </Link>
  )
}

export default CategoryLink

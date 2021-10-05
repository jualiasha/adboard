import React, { FC } from "react"
import Head from "next/head"

import { getCategories, getHomePage } from "../utils/api"
import { ICategory } from "../@types"
import CategoryLink from "../components/CategoryLink/CategoryLink"

const HomePage: any = ({ homePage, categories }) => {
  console.log(homePage)
  return (
    <>
      <Head>
        <title>Super Awesome Ad Board</title>
      </Head>
      <h2>Pinned Categories</h2>
      <div className="categorylinks">
        {categories.map((category: ICategory) => {
          return (
            <CategoryLink
              categoryName={category.categoryName}
              key={category._id}
              slug={category.slug}
              imageSource={category.imageSource}
            />
          )
        })}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const homePage = await getHomePage()
  const categories = await getCategories()
  return { props: { homePage, categories } }
}

export default HomePage

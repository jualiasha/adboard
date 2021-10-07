import React, { FC } from "react"
import Head from "next/head"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { getCategories, getHomePage } from "../utils/api"
import { ICategory } from "../@types"
import CategoryLink from "../components/CategoryLink/CategoryLink"
import Button from "../components/Buttons/Button"

const HomePage: any = ({ homePage, categories }) => {
  console.log(homePage)
  return (
    <>
      <Head>
        <title>Super Awesome Ad Board</title>
      </Head>
      <h2>Pinned Categories</h2>
      <div className="categoryLinks">
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
      <div className="ads">
        <div className="ads__sidefeed">
          <h2>Last Posted</h2>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            handleClick={() => {}}
            disabled={false}
          >
            Filter <ArrowForwardIosIcon className="button__icon" />
          </Button>
        </div>
        <div className="ads__mainfeed">
          <h2>Ads Feed</h2>
        </div>
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

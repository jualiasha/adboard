import React, { FC } from "react"
import Head from "next/head"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { getAds, getCategories, getHomePage } from "../utils/api"
import { ICategory } from "../@types"
import CategoryLink from "../components/CategoryLink/CategoryLink"
import Button from "../components/Buttons/Button"
import FeedAd from "../components/FeedAd/FeedAd"

const HomePage: any = ({ homePage, categories, ads }) => {
  console.log(ads)
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
          <div className="ads__sidefeed__heading">
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
          {ads.map((ad) => {
            return (
              <FeedAd
                key={ad._id}
                headingText={ad.title}
                descriptionText={ad.description}
                variant="ads__sidefeed__lastadded"
              />
            )
          })}
        </div>
        <div className="ads__mainfeed">
          <h2>Ads Feed</h2>
          <div className="ads__mainfeed__adbox">
            {ads.map((ad) => {
              return (
                <FeedAd
                  key={ad._id}
                  headingText={ad.title}
                  descriptionText={ad.description}
                  variant="ads__mainfeed__adbox__ad"
                  imgSource={ad.cover.url}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const homePage = await getHomePage()
  const categories = await getCategories()
  const ads = await getAds()
  return { props: { homePage, categories, ads } }
}

export default HomePage

import React, { FC, useState } from "react"
import Head from "next/head"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { getAds, getCategories, getSubCategories } from "../utils/api"
import { ICategory, ISubCategory, IUserAd } from "../@types"
import CategoryLink from "../components/CategoryLink/CategoryLink"
import Button from "../components/Buttons/Button"
import FeedAd from "../components/FeedAd/FeedAd"
import { Grid } from "@mui/material"
import SubcategoryMenu from "../components/SubcategoryMenu/SubcategoryMenu"

interface HomePageProps {
  categories: ICategory[]
  ads: IUserAd[]
  subcategories: ISubCategory[]
}

const HomePage: FC<HomePageProps> = ({ categories, ads, subcategories }) => {
  const [menuOpen, setMenuOpen] = useState(false) //open /close categories menu
  const menuOpenHandler = () => {
    setMenuOpen(true)
  }
  const menuCloseHandler = () => {
    setMenuOpen(false)
  }

  console.log(categories)
  return (
    <>
      <Head>
        <title>Super Awesome Ad Board</title>
      </Head>
      <div className="homePage">
        <div className="homePage__categoryheading">
          <h2>Pinned Categories</h2>
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
        <div className="categoryLinks">
          {categories.map((category: ICategory) => {
            return (
              <CategoryLink
                categoryName={category.categoryName}
                key={category._id}
                imageSource={category.imageSource}
                click={menuOpenHandler}
              />
            )
          })}
        </div>
        {menuOpen && (
          <SubcategoryMenu
            subcategories={subcategories}
            variant="homePage"
            closeClick={menuCloseHandler}
          />
        )}
        <div className="homePage__ads">
          <div className="homePage__ads__sidefeed">
            <div className="homePage__ads__sidefeed__heading">
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
                  title={ad.title}
                  description={ad.description}
                  variant="homePage__ads__sidefeed__lastadded"
                />
              )
            })}
          </div>
          <div className="homePage__ads__mainfeed">
            <h2>Ads Feed</h2>
            <Grid container justifyContent="space-between" alignItems="center">
              {ads.map((ad) => {
                return (
                  <Grid item xs={12} sm={6} md={6} lg={4} key={ad._id}>
                    <FeedAd
                      title={ad.title}
                      description={ad.description}
                      variant="homePage__ads__mainfeed__adbox__ad"
                      imgSource={ad.cover.url}
                    />
                  </Grid>
                )
              })}
            </Grid>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const categories = await getCategories()
  const ads = await getAds()
  const subcategories = await getSubCategories()
  return { props: { categories, ads, subcategories } }
}

export default HomePage

import React, { FC, useState } from "react"
import Head from "next/head"
import { ICategory, ISubCategory, IUserAd } from "../@types"
import CategoryLink from "../components/CategoryLink/CategoryLink"
import Button from "../components/Buttons/Button"
import FeedAd from "../components/FeedAd/FeedAd"
import { Collapse, Grid } from "@mui/material"
import SubcategoryMenu from "../components/SubcategoryMenu/SubcategoryMenu"
import Icon from "../components/Icon/Icon"
import Link from "next/link"
import { useSelector } from "react-redux"

interface HomePageProps {
  categories: ICategory[]
  ads: IUserAd[]
  subcategories: ISubCategory[]
}

const HomePage: FC<HomePageProps> = () => {
  const categories = useSelector((state: any) => state.categories)
  const ads = useSelector((state: any) => state.ads)
  const [menuOpen, setMenuOpen] = useState<boolean>(() => false) //open /close categories menu
  const [checked, setChecked] = useState<boolean>(() => false) //collapsing
  const [subcategories, setSubcategories] = useState<ISubCategory[] | null>(
    () => null
  ) //setting subcategories for each category in menu
  const [categoryName, setCategoryName] = useState<string | null>(() => null) //getting categoryName of the clicked category

  const menuOpenHandler = (category: ICategory) => {
    setSubcategories(() => category.subcategories)
    setCategoryName(() => category.slug)
    setChecked(() => true)
    setMenuOpen(() => true)
  }

  const menuCloseHandler = () => {
    setChecked(() => false)
    setMenuOpen(() => false)
  }

  const lastposted = 20

  return (
    <>
      <Head>
        <title>Super Awesome Ad Board</title>
      </Head>
      <div className="homePage">
        <div className="homePage__categoryheading">
          <h2>Pinned Categories</h2>
          <Link href="/filter">
            <a>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                handleClick={() => {}}
                disabled={false}
              >
                Filter <Icon icon="arrow" variant="filterIcon" />
              </Button>
            </a>
          </Link>
        </div>
        <div className="categoryLinks">
          {categories[0].imageSource &&
            categories.map((category: ICategory) => {
              return (
                <CategoryLink
                  categoryName={category.categoryName}
                  key={category._id}
                  imageSource={category.imageSource}
                  click={() => menuOpenHandler(category)}
                  category={category}
                />
              )
            })}
        </div>
        {menuOpen && (
          <Collapse in={checked}>
            <SubcategoryMenu
              categoryName={categoryName}
              subcategories={subcategories}
              variant="homePage"
              closeClick={menuCloseHandler}
            />
          </Collapse>
        )}
        <div className="homePage__ads">
          <div className="homePage__ads__sidefeed">
            <div className="homePage__ads__sidefeed__heading">
              <h2>Last Posted</h2>
            </div>
            {ads.slice(0, lastposted).map((ad) => {
              return (
                <Link href={`/ads/${ad.slug}`} key={ad._id}>
                  <a>
                    <FeedAd
                      title={ad.title}
                      description={ad.description}
                      variant="homePage__ads__sidefeed__lastadded"
                    />
                  </a>
                </Link>
              )
            })}
          </div>
          <div className="homePage__ads__mainfeed">
            <h2>Ads Feed</h2>
            <Grid container justifyContent="space-between" alignItems="center">
              {ads.map((ad) => {
                return (
                  <Grid item xs={12} sm={6} md={6} lg={4} key={ad._id}>
                    <Link href={`/ads/${ad.slug}`}>
                      <a>
                        <FeedAd
                          title={ad.title}
                          description={ad.description}
                          variant="feedAd"
                          imgSource={ad.cover?.url}
                        />
                      </a>
                    </Link>
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

/* export async function getStaticProps() {
  const categories = await getCategories()
  const ads = await getAds()

  return { props: { categories, ads } }
} */

export default HomePage

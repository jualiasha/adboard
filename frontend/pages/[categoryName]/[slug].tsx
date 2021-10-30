import React, { FC } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { getAds, getSubCategories, getSubCategory } from "../../utils/api"
import { ISubCategory, IUserAd } from "../../@types"
import { Grid } from "@mui/material"
import Button from "../../components/Buttons/Button"
import Icon from "../../components/Icon/Icon"
import Link from "next/link"
import FeedAd from "../../components/FeedAd/FeedAd"
import { useSelector } from "react-redux"
import { AppState } from "../../store/store"

interface ISubCategoryPageProps {
  subcategory: ISubCategory
  ads: IUserAd[]
}

const SubCategoryPage: FC<ISubCategoryPageProps> = ({ subcategory }) => {
  const router = useRouter()
  const ads = useSelector((state: any) => state.ads)
  if (router.isFallback) {
    return <div>Loading category...</div>
  }

  const filteredAds = ads.filter((ad) => {
    return ad.subcategories[0]?.subCategoryName === subcategory.subCategoryName
  })

  return (
    <div className="subcategories">
      <Head>
        <title>{subcategory.subCategoryName} </title>
      </Head>
      <Grid container justifyContent="space-between">
        <h1>{subcategory.subCategoryName}</h1>
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
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center">
        {filteredAds.map((ad) => {
          return (
            <Grid item xs={6} sm={4} md={3} lg={3} key={ad._id}>
              <Link href={`/ads/${ad.slug}`}>
                <a>
                  <FeedAd
                    title={ad.title}
                    description={ad.description}
                    variant="feedAd"
                    imgSource={ad.cover.url}
                  />
                </a>
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default SubCategoryPage

export async function getStaticProps({ params }) {
  /*  const state = store.getState() */

  const subcategory: ISubCategory = await getSubCategory(params.slug)

  return { props: { subcategory } }
}
/* export async function getStaticProps({ params }) {
  const subcategory: ISubCategory = await getSubCategory(params.slug)
  const ads: IUserAd[] = await getAds()
  return { props: { subcategory, ads } }
} */

export async function getStaticPaths() {
  const subcategories: ISubCategory[] = await getSubCategories()
  return {
    paths: subcategories.map((_subcategory) => {
      return {
        params: { slug: _subcategory.slug },
      }
    }),
    fallback: true,
  }
}

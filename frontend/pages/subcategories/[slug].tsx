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

interface ISubCategoryPageProps {
  subcategory: ISubCategory
  ads: IUserAd[]
}

const SubCategoryPage: FC<ISubCategoryPageProps> = ({ subcategory, ads }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading category...</div>
  }

  return (
    <div className="subcategories">
      <Head>
        <title>{subcategory.subCategoryName} </title>
      </Head>
      <Grid container justifyContent="space-between">
        <h1>{subcategory.subCategoryName}</h1>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          handleClick={() => {}}
          disabled={false}
        >
          <Link href="/filter">
            <a>
              Filter <Icon icon="arrow" variant="filterIcon" />
            </a>
          </Link>
        </Button>
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center">
        {ads.map((ad) => {
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
  const subcategory: ISubCategory = await getSubCategory(params.slug)
  const ads: IUserAd[] = await getAds()
  return { props: { subcategory, ads } }
}

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

import React, { FC, useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { getSubCategories, getSubCategory } from "../../utils/api"
import { ISubCategory, IUserAd } from "../../@types"
import { Grid } from "@mui/material"
import Button from "../../components/Buttons/Button"
import Icon from "../../components/Icon/Icon"
import Link from "next/link"

import SimpleFeedLayout from "../../components/SimpleFeedLayout/SimpleFeedLayout"
import axios from "axios"

interface ISubCategoryPageProps {
  subcategory: ISubCategory
}

const SubCategoryPage: FC<ISubCategoryPageProps> = ({ subcategory }) => {
  const router = useRouter()

  const [filteredAds, setFilteredAds] = useState<IUserAd[] | []>(() => [])

  axios
    .get(
      `http://localhost:1337/user-ads?subcategory=${subcategory.subCategoryName}`
    )
    .then((resp: any) => setFilteredAds(resp.data))

  if (router.isFallback) {
    return <div>Loading category...</div>
  }

  return (
    <div className="subcategories">
      <Head>
        <title>{subcategory.subCategoryName} </title>
      </Head>
      {router.isFallback ? (
        <div>Loading category...</div>
      ) : (
        <>
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
          <SimpleFeedLayout ads={filteredAds} />
        </>
      )}
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

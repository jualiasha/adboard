import React, { FC, useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { getSubCategories, getSubCategory } from "../../utils/api"
import { ISubCategory, IUserAd } from "../../@types"
import { Grid } from "@mui/material"
import Icon from "../../components/Icon/Icon"
import Link from "next/link"

import SimpleFeedLayout from "../../components/SimpleFeedLayout/SimpleFeedLayout"
import axios from "axios"
import CategoryMenu from "../../components/CategoryMenu/CategoryMenu"

interface ISubCategoryPageProps {
  subcategory: ISubCategory
}

const SubCategoryPage: FC<ISubCategoryPageProps> = ({ subcategory }) => {
  const router = useRouter()

  const [filteredAds, setFilteredAds] = useState<IUserAd[] | []>(() => [])

  axios
    .get(
      `http://13.51.47.132:1337/user-ads?subcategory=${
        subcategory ? subcategory.subCategoryName : ""
      }`
    )
    .then((resp: any) => setFilteredAds(resp.data))

  return (
    <div className="subcategories">
      {router.isFallback || !subcategory ? (
        <div>Loading category...</div>
      ) : (
        <>
          <Head>
            <title>{subcategory.subCategoryName} </title>
            <meta
              name="description"
              content={`${subcategory.subCategoryName} ads in AdBoard`}
            />
          </Head>
          <Grid container justifyContent="space-between">
            <div></div>
            <Link href="/filter">
              <a className="buttonlink">
                Filter <Icon icon="arrow" variant="filterIcon" />
              </a>
            </Link>
          </Grid>
          <CategoryMenu />
          <Grid container justifyContent="space-between">
            <h1>{subcategory.subCategoryName}</h1>
          </Grid>
          <SimpleFeedLayout ads={filteredAds} />
        </>
      )}
    </div>
  )
}

export default SubCategoryPage

export async function getStaticProps({ params }) {
  const subcategory: ISubCategory = await getSubCategory(params.slug)
  return { props: { subcategory } }
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

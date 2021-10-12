import React, { FC } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { getSubCategories, getSubCategory } from "../../utils/api"
import { ISubCategory } from "../../@types"

interface ISubCategoryPageProps {
  subcategory: ISubCategory
}

const SubCategoryPage: FC<ISubCategoryPageProps> = ({ subcategory }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading category...</div>
  }

  return (
    <div>
      <Head>
        <title>{subcategory.subCategoryName} </title>
      </Head>
      <h1>{subcategory.subCategoryName}</h1>
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

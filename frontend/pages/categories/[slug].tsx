import React, { FC } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import ProductsList from "../../components/ProductsList"
import { getCategories, getCategory } from "../../utils/api"
import { CategoryNames, ICategory } from "../../@types"

interface ICategoryPageProps {
  category: ICategory
}

const CategoryPage: FC<ICategoryPageProps> = ({ category }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading category...</div>
  }

  return (
    <div>
      <Head>
        <title>{category.categoryName} </title>
      </Head>
      {/* <ProductsList products={category.products} /> */}
    </div>
  )
}

export default CategoryPage

export async function getStaticProps({ params }) {
  const category: ICategory = await getCategory(params.slug)
  return { props: { category } }
}

export async function getStaticPaths() {
  const categories: ICategory[] = await getCategories()
  return {
    paths: categories.map((_category) => {
      return {
        params: { slug: _category.slug },
      }
    }),
    fallback: true,
  }
}

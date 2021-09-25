import React, { FC } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import CategoryLink from "../components/CategoryLink/CategoryLink"
import { ICategory } from "../@types"

interface LayoutProps {
  categories: ICategory[]
}

const Layout: FC<LayoutProps> = ({ children, categories }) => {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
        <Navbar />
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
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
      <div
        hidden
        id="snipcart"
        data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
      />
    </div>
  )
}

export default Layout

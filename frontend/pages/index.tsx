import React, { FC } from "react"
import Head from "next/head"
import Icon from "../components/Icon/Icon"
import Link from "next/link"
import { useSelector } from "react-redux"
import { AppState } from "../store/store"
import DoubleFeedLayout from "../components/DoubleFeedLayout/DoubleFeedLayout"
import CategoryMenu from "../components/CategoryMenu/CategoryMenu"

const HomePage: FC = () => {
  const ads = useSelector((state: AppState) => state.ads)

  return (
    <>
      <Head>
        <title>Super Awesome Ad Board</title>
        <meta
          name="description"
          content="Categorized and easy to use adBoard with different options"
        />
      </Head>
      <div className="homePage">
        <div className="homePage__categoryheading">
          <h2>Pinned Categories</h2>
          <Link href="/filter">
            <a className="buttonlink">
              Filter <Icon icon="arrow" variant="filterIcon" />
            </a>
          </Link>
        </div>
        <CategoryMenu />
        <DoubleFeedLayout ads={ads} />
      </div>
    </>
  )
}

export default HomePage

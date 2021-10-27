import React, { FC } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { IUserAd } from "../../@types"
import { getAds, getAd } from "../../utils/api"
import Link from "next/link"
import Icon from "../../components/Icon/Icon"
import Button from "../../components/Buttons/Button"

interface IAdPage {
  ad: IUserAd
}

const AdPage: FC<IAdPage> = ({ ad }) => {
  const router = useRouter()
  /*defining previous page for "go back" button*/

  if (router.isFallback) {
    return <div>Loading product...</div>
  }

  return (
    <>
      <Head>
        <title>{ad.title} ad</title>
      </Head>
      <h4>{ad.title}</h4>
      {/* <Link href="">
        <a className="buttonlink">
          <Icon icon="arrow" variant="backIcon" />
          Go Back
        </a>
      </Link> */}
      <Button
        type="button"
        variant="secondary"
        size="sm"
        handleClick={() => {}}
        disabled={false}
      >
        <Icon icon="arrow" variant="backIcon" /> Go Back
      </Button>
    </>
  )
}

export default AdPage

export async function getStaticProps({ params }) {
  const ad: IUserAd = await getAd(params.slug)
  return { props: { ad } }
}

export async function getStaticPaths() {
  const ads: IUserAd[] = await getAds()
  return {
    paths: ads.map((_ad) => {
      return {
        params: { slug: _ad.slug },
      }
    }),
    fallback: true,
  }
}

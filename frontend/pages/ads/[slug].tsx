import React, { FC } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { IUserAd } from "../../@types"
import { getAds, getAd } from "../../utils/api"
import Link from "next/link"
import Icon from "../../components/Icon/Icon"
import Button from "../../components/Buttons/Button"
import {
  Grid,
  ImageList,
  ImageListItem,
  Pagination,
  Stack,
} from "@mui/material"
import AdInfo from "../../components/AdInfo/AdInfo"
import ImageGallery from "../../components/ImageGallery/ImageGallery"

interface IAdPage {
  ad: IUserAd
}

const AdPage: FC<IAdPage> = ({ ad }) => {
  const router = useRouter()
  /*defining previous page for "go back" button*/

  const itemData = ad.gallery?.map((image) => {
    return {
      img: image.url,
      alt: ad.title,
    }
  })

  console.log(ad.gallery)

  if (router.isFallback) {
    return <div>Loading product...</div>
  }

  return (
    <>
      <Head>
        <title>{ad.title} ad</title>
        <meta name="description" content={`${ad.title}" ads in adboard`} />
      </Head>
      <Grid container justifyContent="space-between" className="adPage">
        <h4>{ad.title}</h4>
        <Link href="/filter">
          <a className="buttonlink">
            Filter <Icon icon="arrow" variant="filterIcon" />
          </a>
        </Link>
      </Grid>
      <Grid container mt={2}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <ImageGallery ad={ad} />
        </Grid>
        <Grid item xs={12} sm={5} md={5} lg={5} ml={2}>
          <AdInfo title="Price:" value={ad.price} />
          <AdInfo title="Telephone:" value={ad.phoneNumber} />
          <AdInfo title="Description:" value={ad.description} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          lg={2}
          justifyContent="flex-end"
          alignSelf="center"
          style={{ display: "flex" }}
        >
          <Button
            type="button"
            variant="secondary"
            size="sm"
            handleClick={() => router.back()}
            disabled={false}
          >
            <Icon icon="arrow" variant="backIcon" /> Go Back
          </Button>
        </Grid>
      </Grid>
      <Grid container mt={2}>
        <h5>Content:</h5>
        <div className="adPage__content">{ad.content}</div>
      </Grid>
    </>
  )
}

export default AdPage

export async function getStaticProps({ params }) {
  const ad: IUserAd = await getAd(params.slug)
  console.log(params.slug)
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

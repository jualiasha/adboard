import { Grid } from "@mui/material"
import Link from "next/link"
import React, { FC } from "react"
import { IUserAd } from "../../@types"
import FeedAd from "../FeedAd/FeedAd"

interface ISimpleFeedLayout {
  ads: IUserAd[]
}

const SimpleFeedLayout: FC<ISimpleFeedLayout> = ({ ads }) => {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      {ads?.map((ad) => {
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
  )
}

export default SimpleFeedLayout

import { Grid } from "@mui/material"
import Link from "next/link"
import React, { FC } from "react"
import { IUserAd } from "../../@types"
import FeedAd from "../FeedAd/FeedAd"

interface IFeedLAyout {
  ads: IUserAd[]
}

const DoubleFeedLayout: FC<IFeedLAyout> = ({ ads }) => {
  const lastposted = 5
  return (
    <div className="adsFeed">
      <div className="adsFeed__sidefeed">
        <div className="adsFeed__sidefeed__heading">
          <h2>Last Posted</h2>
        </div>
        {ads &&
          ads?.slice(0, lastposted).map((ad: IUserAd, index: number) => {
            return (
              <Link key={index} href={`/ads/${ad.slug}`}>
                <a>
                  <FeedAd
                    title={ad.title}
                    description={ad.description}
                    variant="adsFeed__sidefeed__lastadded"
                  />
                </a>
              </Link>
            )
          })}
      </div>
      <div className="adsFeed__mainfeed">
        <h2>Ads Feed</h2>
        <Grid container justifyContent="space-between" alignItems="center">
          {ads &&
            ads?.map((ad: IUserAd, index: number) => {
              return (
                <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                  <Link href={`/ads/${ad.slug}`}>
                    <a>
                      <FeedAd
                        title={ad.title}
                        description={ad.description}
                        variant="feedAd"
                        imgSource={ad.cover?.url}
                      />
                    </a>
                  </Link>
                </Grid>
              )
            })}
        </Grid>
      </div>
    </div>
  )
}

export default DoubleFeedLayout

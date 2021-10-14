import React, { FC } from "react"

interface FeedAdProps {
  title: string
  description: string
  variant: string
  imgSource?: string
}

const FeedAd: FC<FeedAdProps> = ({
  title,
  description,
  variant,
  imgSource,
}) => {
  return (
    <div className={variant}>
      {variant.includes("feedAd") ? (
        <>
          <img src={imgSource} alt={title} className={`${variant}__image`} />
          <div className={`${variant}__gradient`}></div>
        </>
      ) : null}

      <h4 className={`${variant}__headingtext`}>{title}</h4>
      <p className={`${variant}__descriptiontext`}>{description}</p>
    </div>
  )
}

export default FeedAd

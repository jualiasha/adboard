import React, { FC } from "react"

interface FeedAdProps {
  headingText: string
  descriptionText: string
  variant: string
  imgSource?: string
}

const FeedAd: FC<FeedAdProps> = ({
  headingText,
  descriptionText,
  variant,
  imgSource,
}) => {
  return (
    <div className={variant}>
      {variant.includes("main") ? (
        <img
          src={imgSource}
          alt={headingText}
          className={`${variant}__image`}
        />
      ) : null}

      <h4 className={`${variant}__headingtext`}>{headingText}</h4>
      <p className={`${variant}__descriptiontext`}>{descriptionText}</p>
    </div>
  )
}

export default FeedAd

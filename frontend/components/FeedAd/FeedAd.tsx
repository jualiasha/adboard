import React, { FC } from "react"

interface FeedAdProps {
  headingText: string
  descriptionText: string
  variant: string
}

const FeedAd: FC<FeedAdProps> = ({ headingText, descriptionText, variant }) => {
  return (
    <div className={variant}>
      <h4 className={`${variant}__headingtext`}>{headingText}</h4>
      <p className={`${variant}__descriptiontext`}>{descriptionText}</p>
    </div>
  )
}

export default FeedAd

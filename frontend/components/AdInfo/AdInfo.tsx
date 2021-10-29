import React, { FC } from "react"

interface IAdInfo {
  title: string
  value: string
}

const AdInfo: FC<IAdInfo> = ({ title, value }) => {
  return (
    <div className="adInfo">
      <h5 className="adInfo__title">{title}</h5>
      <p className="adInfo__value">{value}</p>
    </div>
  )
}

export default AdInfo

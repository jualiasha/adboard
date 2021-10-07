import React, { FC } from "react"
import { INavLink } from "../../@types/"

const NavLink: FC<INavLink> = ({ imageSource, imageName, variant }) => {
  return (
    <div className={`${variant}__box`}>
      <img
        className={`${variant}__box__image`}
        src={imageSource}
        alt={imageName}
      />
      <p className={`${variant}__box__name`}>{imageName}</p>
    </div>
  )
}

export default NavLink

import React, { FC } from "react"
import { INavLink } from "../../@types/"
import Icon from "../Icon/Icon"

const NavLink: FC<INavLink> = ({ imageSource, imageName, variant, icon }) => {
  return (
    <div className={`${variant}__box`}>
      {/* <img
        className={`${variant}__box__image`}
        src={imageSource}
        alt={imageName}
      /> */}
      {icon && <Icon icon={icon} />}
      <p className={`${variant}__box__name`}>{imageName}</p>
    </div>
  )
}

export default NavLink

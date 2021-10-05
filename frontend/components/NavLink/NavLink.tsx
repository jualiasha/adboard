import React, { FC } from "react"
import { INavLink } from "../../@types/"

const NavLink: FC<INavLink> = ({ imageSource, imageName }) => {
  return (
    <div className="navlink">
      <img className="navlink__image" src={imageSource} alt={imageName} />
      <p className="navlink__name">{imageName}</p>
    </div>
  )
}

export default NavLink

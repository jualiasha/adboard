import React, { FC } from "react"

interface INavLinkProps {
  imageSource: string
  imageName: string
}

const NavLink: FC<INavLinkProps> = ({ imageSource, imageName }) => {
  return (
    <div className="navlink">
      <img className="navlink__image" src={imageSource} alt={imageName} />
      <p className="navlink__name">{imageName}</p>
    </div>
  )
}

export default NavLink

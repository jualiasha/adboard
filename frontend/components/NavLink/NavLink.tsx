import Link from "next/link"
import React, { FC } from "react"
import { INavLink } from "../../@types/"
import Icon from "../Icon/Icon"

const NavLink: FC<INavLink> = ({ imageName, variant, icon, link }) => {
  return (
    <div className={`${variant}__box`}>
      <Link href={link}>
        <a>
          {icon && <Icon icon={icon} />}
          <p className={`${variant}__box__name`}>{imageName}</p>
        </a>
      </Link>
    </div>
  )
}

export default NavLink

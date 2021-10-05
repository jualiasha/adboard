import React, { FC } from "react"
import Search from "../Search/Search"
import NavLink from "../NavLink/NavLink"
import { getNavLinks } from "../../utils/api"

interface HeaderProps {
  logoSource: string
  navLinks: any
}

const Header: FC<HeaderProps> = ({ logoSource, navLinks }) => {
  console.log(navLinks)

  return (
    <header>
      <img className="header__logo" src={logoSource} alt="adBoard" />
      <Search />
      <div className="header__navlinks">
        <NavLink imageName="" imageSource="" />
        <NavLink imageName="" imageSource="" />
        <NavLink imageName="" imageSource="" />
      </div>
    </header>
  )
}

export async function getStaticProps() {
  const navLinks = await getNavLinks()
  return { props: { navLinks } }
}

export default Header

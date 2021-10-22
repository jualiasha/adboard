import Link from "next/link"
import { FC } from "react"
import { ILogo, INavLink } from "../@types"
import NavLink from "./NavLink/NavLink"
import SearchForm from "./SearchForm/SearchForm"

interface INavbarProps {
  navLinks: INavLink[]
  logo: ILogo
}

const Navbar: FC<INavbarProps> = ({ navLinks, logo }) => {
  return (
    <header>
      <Link href="/">
        <a>
          <img className="header__logo" src={logo.logo.url} alt={logo.alt} />
        </a>
      </Link>
      <SearchForm />
      <div className="header__navLinks">
        {navLinks.map((navLink: any) => {
          return (
            <NavLink
              key={navLink._id}
              imageName={navLink.imageName}
              imageSource={navLink.imageSource.url}
              variant="header__navLinks"
              icon={navLink.icon}
              link={navLink.link}
            />
          )
        })}
      </div>
    </header>
  )
}

export default Navbar

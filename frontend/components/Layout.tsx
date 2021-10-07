import React, { FC } from "react"
import NavLink from "./NavLink/NavLink"
import Search from "./Search/Search"
import { INavLink, IFooterMenuLink, ILogo } from "../@types/"

interface LayoutProps {
  logo: ILogo
  copywrite: string
  footerMenuLinks: IFooterMenuLink[]
  navLinks: INavLink[]
}

const Layout: FC<LayoutProps> = ({
  children,
  logo,
  copywrite,
  footerMenuLinks,
  navLinks,
}) => {
  return (
    <>
      <header>
        <img className="header__logo" src={logo.logo.url} alt={logo.alt} />
        <Search />
        <div className="header__navLinks">
          {navLinks.map((navLink: any) => {
            return (
              <NavLink
                key={navLink._id}
                imageName={navLink.imageName}
                imageSource={navLink.imageSource.url}
                variant="header__navLinks"
              />
            )
          })}
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="footer__left">
          <img
            className="footer__left__logo"
            src={logo.logo.url}
            alt={logo.alt}
          />
        </div>
        <div className="footer__right">
          <ul className="footer__right__menu">
            {footerMenuLinks.map((link: IFooterMenuLink) => {
              return <li key={link._id}>{link.footerLinkName}</li>
            })}
          </ul>
        </div>
        <p className="footer__copywrite">{copywrite}</p>
      </footer>
      <div
        hidden
        id="snipcart"
        data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
      />
    </>
  )
}

export default Layout

import React, { FC } from "react"
import Search from "./Search/Search"

interface LayoutProps {
  logo: string
  copywrite: string
  footermenuitems: string[]
  navLinks: string[]
}

const Layout: FC<LayoutProps> = ({
  children,
  logo,
  copywrite,
  footermenuitems,
  navLinks,
}) => {
  return (
    <>
      <header>
        <img className="header__logo" src={logo} alt="adBoard" />
        <Search />
        <div className="header__navlinks">
          {navLinks.map((navLink: string) => {
            return navLink
          })}
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="footer__left">
          <img className="footer__left__logo" src={logo} />
        </div>
        <div className="footer__right">
          <ul className="footer__right__menu">
            {footermenuitems.map((item: string) => {
              return <li>{item}</li>
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

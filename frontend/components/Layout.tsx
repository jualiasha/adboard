import React, { FC, useEffect } from "react"
import { INavLink, IFooterMenuLink, ILogo } from "../@types/"
import { useDispatch } from "react-redux"
import { initializeCategories } from "../store/actions/categoryActions"
import { initializeAds } from "../store/actions/adsActions"
import Navbar from "./Navbar"

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
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeCategories())
    dispatch(initializeAds())
  }, [dispatch])

  return (
    <>
      <Navbar navLinks={navLinks} logo={logo} />
      <main>{children}</main>
      <footer>
        <div className="footer__container">
          <div className="footer__container__left">
            <img
              className="footer__container__left__logo"
              src={logo.logo.url}
              alt={logo.alt}
            />
          </div>
          <div className="footer__container__right">
            <ul className="footer__container__right__menu">
              {footerMenuLinks.map((link: IFooterMenuLink) => {
                return (
                  <li
                    key={link._id}
                    className="footer__container__right__menu__list"
                  >
                    {link.footerLinkName}
                  </li>
                )
              })}
            </ul>
          </div>
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

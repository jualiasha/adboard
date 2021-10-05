import React, { FC } from "react"

interface FooterProps {
  logoImage: string
  listItem: string
  copywrite: string
}

const Footer: FC<FooterProps> = ({ logoImage, listItem, copywrite }) => {
  return (
    <footer>
      <div className="footer__left">
        <img className="footer__left__logo" src={logoImage} />
      </div>
      <div className="footer__right">
        <ul className="footer__right__menu">
          <li>{listItem}</li>
        </ul>
      </div>
      <p className="footer__copywrite">{copywrite}</p>
    </footer>
  )
}

export default Footer

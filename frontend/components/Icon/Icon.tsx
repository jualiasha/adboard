import React, { FC } from "react"
import { Icons } from "../../@types"
import { iconsList } from "./iconsList"
import styles from "./Icon.module.scss"

interface IIconProps {
  icon: Icons
  variant?: string
  click?: () => void
}

const Icon: FC<IIconProps> = ({ icon, variant, click }) => {
  return (
    <span className={`${styles.icon} ${styles[variant]}`} onClick={click}>
      {iconsList[icon]}
    </span>
  )
}

export default Icon

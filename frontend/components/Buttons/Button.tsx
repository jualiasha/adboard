import React, { FC, MouseEvent } from "react"
import { ButtonTypes, Sizes, ButtonVariants } from "../../@types"
import styles from "./Button.module.scss"

interface IButtonProps {
  type: ButtonTypes
  handleClick: (event: any) => void
  variant: ButtonVariants
  size: Sizes
  disabled: boolean
}

const Button: FC<IButtonProps> = ({
  children,
  type,
  size,
  disabled,
  variant,
  handleClick,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button

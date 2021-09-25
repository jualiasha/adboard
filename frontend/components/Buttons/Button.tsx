import React, { FC, MouseEvent } from "react"
import { ButtonTypes, Sizes, ButtonVariants } from "../../@types"

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
      className={`button button--${variant} button--${size}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button

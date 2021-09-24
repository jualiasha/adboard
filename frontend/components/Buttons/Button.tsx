import React, { FC, MouseEvent } from "react"
import { ButtonTypes } from "../../@types"

interface IButtonProps {
  type: ButtonTypes
  handleClick: () => void
  variant: string
}

const Button: FC<IButtonProps> = ({
  children,
  type = "button",
  variant,
  handleClick,
}) => {
  return (
    <button type={type} className={variant} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button

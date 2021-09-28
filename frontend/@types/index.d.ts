export type HeadingVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
export type HeadingSizes = "xs" | "sm" | "md" | "lg" | "xlg" | "xxlg"
export type Sizes = "sm" | "md" | "lg"
export type TextColors = "black" | "white"
export type ButtonTypes = "submit" | "button" | "reset"
export type ButtonVariants =
  | "primary"
  | "secondary"
  | "destructive"
  | "disabled"

export type TextInputTypes =
  | "text"
  | "password"
  | "email"
  | "tel"
  | "number"
  | "url"
  | "search"
export type TargetTypes = "_blank" | "_self" | "_parent" | "_top"
export type IconNames = "close"
/** User and account */

export type Roles = "basic" | "admin"
export interface IUser {
  username: string
  email: string
  password: string
  id: number
  role: Roles
}

export interface ILoggedInUser {
  user: IUser
  isAuthenticated: boolean
}

export interface ILogo {
  src: string
  alt: string
}

export type CategoryNames =
  | "Real Estate"
  | "Job and Business"
  | "Entertainment"
  | "Transport"
  | "Shopping"
  | "Rent Items"

export interface ICategory {
  categoryName: CategoryNames
  imageSource: string
  slug: string
  _id: string
}

export interface IUserAd {
  title: string
  description: string
  content: string
  city: string
}

/** Datavbase connection */
export interface IConnectionSettings {
  user: string
  password: string
  port: number
  host: string
  database: string
}

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

/** User and account */

export type Roles = "basic" | "admin"
export type Icons = "plus" | "login" | "logout" | "search" | "arrow" | "close"
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
  subcategories: ISubCategory[]
}

export interface IUserAd {
  title: string
  description: string
  content: string
  city?:
    | "All Finland"
    | "Helsinki"
    | "Vantaa"
    | "Espoo"
    | "Oulu"
    | "Turku"
    | "Tampere"
    | "Rovaniemi"
    | "Jyväskylä"
    | "Kuopio"
    | "Lahti"
    | "Pori"
    | "Kouvola"
    | "Joensuu"
    | "Lappeenranta"
    | "Hämeenlinna"
    | "Vaasa"
  _id?: string
  cover?: any
  slug?: string
  subcategories: ISubCategory[]
}

export interface ISubCategory {
  subCategoryName: string
  slug: string
  _id: string
  category?: ICategory
  userAd?: IUserAd
}

export interface INavLink {
  imageSource: string
  imageName: string
  variant?: string
  icon: Icons
}

interface Logo {
  url: string
}

export interface ILogo {
  logo: Logo

  alt: string
}

export interface IFooterMenuLink {
  footerLinkName: string
  _id: string
}
/** Datavbase connection */
export interface IConnectionSettings {
  user: string
  password: string
  port: number
  host: string
  database: string
}

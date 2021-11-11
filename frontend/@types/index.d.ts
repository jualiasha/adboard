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
  | "select"
export type TargetTypes = "_blank" | "_self" | "_parent" | "_top"
export type Cities =
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

/** User and account */

export type Roles = "basic" | "admin"
export type Icons = "plus" | "login" | "logout" | "search" | "arrow" | "close"
export interface IUser {
  username: string
  strapiToken: string;
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
  city?: Cities | ""
  _id?: string
  cover?: any
  gallery?: any[]
  slug?: string
  subcategory: string
  subSection?: string
  tags?: string
  price?: string
  phoneNumber?: string
}

export interface IAdTags {
  totalArea: string
  roomNumber: number
}

export interface ISubCategory {
  subCategoryName: string
  slug: string
  _id: string
  category?: ICategory
  userAd?: IUserAd
}

export interface InputField {
  id: string
  type: TextInputTypes
  name: string
  label: string
  required: boolean
  options?: string[]
  disabled?: boolean
}
export interface IMessage {
  messageText: string
  bgColor: string
}

export interface IFilterForm {
  city: Cities | ""
  category: CategoryNames | ""
  subcategory: string
  subSection: string
}

export interface ISearchForm {
  city: Cities
  title: string
}

export interface INavLink {
  imageSource: string
  imageName: string
  variant?: string
  icon: Icons
  link: string
}

export interface ISubSection {
  subsection: string
  subcategoryName: string
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

export interface IFormField {
  type: TextInputTypes
  name: string
  id: string
  label: string
  errorText?: string
  required?: boolean
  disabled?: boolean
  readonly?: boolean
  options?: string[]
}
export interface ILoginFormStateProps {
  email: string
  password: string
}

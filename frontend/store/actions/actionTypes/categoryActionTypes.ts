import { ICategory } from "../../../@types"

export const INIT_CATEGORIES = "INIT_CATEGORIES"

export interface InitializeCategories {
  type: typeof INIT_CATEGORIES
  categories: ICategory[]
}

export type CategoryActionTypes = InitializeCategories

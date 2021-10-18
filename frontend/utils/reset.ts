import { IFilterForm } from "../@types"

export function resetFilterForm(): IFilterForm {
  return {
    city: "",
    category: "",
    subcategory: "",
    subSection: "",
  }
}

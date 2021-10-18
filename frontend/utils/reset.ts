import { IFilterForm } from "../@types"

export function resetFilterForm(): IFilterForm {
  return {
    city: "All Finland",
    category: "",
    subcategory: "",
    subSection: "",
  }
}

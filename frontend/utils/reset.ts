import { IFilterForm, IUserAd } from "../@types"

export function resetFilterForm(): IFilterForm {
  return {
    city: "",
    category: "",
    subcategory: "",
    subSection: "",
  }
}

export function resetAdForm(): IUserAd {
  return {
    title: "test title",
    description: "test dexcription",
    content: "test content",
    city: "Helsinki",
    subcategory: "",
    subSection: "",
    price: "20",
    slug: "test",
    phoneNumber: "00000000",
  }
}

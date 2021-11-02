import {
  ICategory,
  IFilterForm,
  IMessage,
  ISearchForm,
  ISubCategory,
  IUserAd,
} from "../@types"

export function resetSearchForm(): ISearchForm {
  return {
    city: "All Finland",
    title: "",
  }
}

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
    title: "",
    description: "",
    content: "",
    city: "Helsinki",
    subcategory: "",
    subSection: "",
    price: "",
    slug: "",
    phoneNumber: "0000000",
  }
}

export function resetUserAds(): IUserAd[] {
  return [
    {
      title: "",
      description: "",
      phoneNumber: "",
      price: "",
      subcategory: "",
      subSection: "",
      content: "",
    },
  ]
}

export function resetCategories(): ICategory[] {
  return [
    {
      categoryName: "Entertainment",
      imageSource: "",
      slug: "",
      _id: "",
      subcategories: resetSubCategories(),
    },
  ]
}

export function resetSubCategories(): ISubCategory[] {
  return [
    {
      subCategoryName: "",
      slug: "",
      _id: "",
    },
  ]
}

export function resetMessage(): IMessage {
  return { messageText: "", bgColor: "" }
}

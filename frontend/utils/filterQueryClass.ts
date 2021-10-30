import { CategoryNames, Cities, IFilterForm } from "../@types"

export class FilterQuery implements IFilterForm {
  public category: CategoryNames
  public city: Cities
  public subcategory: string
  public subSection: string
  public constructor(data: IFilterForm) {
    this.city = data.city || undefined
    this.category = undefined
    this.subcategory = data.subcategory || undefined
    this.subSection = data.subSection || undefined
  }
  /*Filter out undefined values*/
  public filterQuery(): this {
    for (const key in this) {
      if (this[key] === undefined) {
        delete this[key]
      }
    }
    return this
  }
  /*Construct and return queryString*/
  public generateQueryString(data: IFilterForm): string {
    const queryString = Object.keys(data)
      .map((key) => key + "=" + data[key])
      .join("&")
    return `?${queryString}`
  }
}

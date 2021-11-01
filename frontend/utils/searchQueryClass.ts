import { Cities, ISearchForm } from "../@types"

export class SearchQuery implements ISearchForm {
  public city: Cities
  public title: string

  public constructor(data: ISearchForm) {
    this.city = data.city || undefined
    this.title = undefined
  }
  /*Filter out undefined values*/
  public searchQuery(): this {
    for (const key in this) {
      if (this[key] === undefined) {
        delete this[key]
      }
    }
    return this
  }
  /*Construct and return queryString*/
  public generateQueryString(data: ISearchForm): string {
    const queryString = Object.keys(data)
      .map((key) => key + "=" + data[key])
      .join("&")
    return `?${queryString}`
  }
}

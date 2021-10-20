export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}

export async function getCategories() {
  const categories = await fetchAPI("/categories")
  return categories
}

export async function getSubCategories() {
  const subcategories = await fetchAPI("/subcategories")
  return subcategories
}

export async function getNavLinks() {
  const navLinks = await fetchAPI("/nav-links")
  return navLinks
}

export async function getFooterLinks() {
  const footerLinks = await fetchAPI("/footer-links")
  return footerLinks
}

export async function getLogo() {
  const logo = await fetchAPI("/logo")
  return logo
}

export async function getSubCategory(slug) {
  const categories = await fetchAPI(`/subcategories?slug=${slug}`)
  return categories?.[0]
}

export async function getHomePage() {
  const homePage = await fetchAPI("/home-page")
  return homePage
}

export async function getAds() {
  const ads = await fetchAPI("/user-ads")
  return ads
}
export async function getAreas() {
  const areas = await fetchAPI("/total-areas")
  return areas
}

export async function getAd(slug) {
  const ads = await fetchAPI(`/user-ads?slug=${slug}`)
  return ads?.[0]
}

export async function getProduct(slug) {
  const products = await fetchAPI(`/products?slug=${slug}`)
  return products?.[0]
}

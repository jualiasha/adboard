import React from "react"
import { getHomePage } from "../utils/api"

const HomePage = ({ homePage }) => {
  return <div></div>
}

export async function getStaticProps() {
  const homePage = await getHomePage()
  return { props: { homePage } }
}

export default HomePage

import React, { FC } from "react"
import { useSelector } from "react-redux"
import FilterForm from "../components/Filter/FilterForm"
import { getAreas } from "../utils/api"

const filter: FC<any> = ({ areas }) => {
  const categories = useSelector((state: any) => state.categories)

  return (
    <>
      <FilterForm areas={areas} />
    </>
  )
}
export async function getStaticProps() {
  const areas = await getAreas()

  return { props: { areas } }
}
export default filter

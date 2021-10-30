import React, { useState } from "react"

function usePagination(data, itemsPerPage) {
  const [currentSlide, setCurrentSlide] = useState(1)
  const maxPage = Math.ceil(data.length / itemsPerPage)

  function currentData() {
    const begin = (currentSlide - 1) * itemsPerPage
    const end = begin + itemsPerPage
    return data.slice(begin, end)
  }

  function next() {
    setCurrentSlide((currentSlide) => Math.min(currentSlide + 1, maxPage))
  }

  function prev() {
    setCurrentSlide((currentSlide) => Math.max(currentSlide - 1, 1))
  }

  function jump(page) {
    const pageNumber = Math.max(1, page)
    setCurrentSlide((currentSlide) => Math.min(pageNumber, maxPage))
  }

  return { next, prev, jump, currentData, currentSlide, maxPage }
}

export default usePagination

import { Grid, TextField } from "@mui/material"
import React, { FC, useState } from "react"
import { ICategory, IUserAd } from "../@types"
import FeedAd from "../components/FeedAd/FeedAd"
import { useSelector } from "react-redux"
import axios from "axios"
import Button from "../components/Buttons/Button"
import { resetAdForm } from "../utils/reset"
import { setHeader } from "../utils/axiosConfig"
import { itemsToArray } from "../utils"
import Select from "../components/Select/Select"
import { citiesEn } from "../utils/cities"

const NewAddPage: FC = () => {
  const [userAdForm, setUserAdForm] = useState<IUserAd>(() => resetAdForm())

  const [images, setImages] = useState<[]>([])
  const categories = useSelector((state: any) => state.categories)
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [subcategories, setSubcategories] = useState<string[]>(() => [])
  const [subSection, setSubSection] = useState<string[]>(() => [])
  const baseUrl = "http://localhost:1337"

  const test = (event) => {
    if (event.target.name === "files") {
      setImages(event.target.files)
    }
  }

  const submitHandler = async (event: any) => {
    event.preventDefault()
    const formdata = new FormData()
    const galleryImages = []
    const arrayfiles = itemsToArray(images)
    arrayfiles.forEach((file) => {
      formdata.append("files", file)
      setHeader("multipart/form-data", null)
      axios.post(`${baseUrl}/upload`, formdata).then((resp) => {
        console.log(resp.data)
        galleryImages.push(resp.data)
        if (galleryImages.length === arrayfiles.length) {
          setHeader("application/json", null)
          console.log(galleryImages[0])
          axios
            .post(`${baseUrl}/user-ads`, {
              ...userAdForm,
              cover: galleryImages[0][0],
              gallery: galleryImages[0],
            })
            .then((resp) => console.log(resp))
        }
      })
    })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAdForm({ ...userAdForm, [event.target.name]: event.target.value })
    setSelectedCategory(
      event.target.name === "category" ? event.target.value : selectedCategory
    )

    if (event.target.name === "category") {
      const selectedSubcategories = categories
        .filter((category: ICategory) => {
          return category.categoryName === event.target.value
        })
        .map((category: ICategory) => {
          return category.subcategories
        })

      setSubcategories(() =>
        selectedSubcategories[0].map(
          (subcategory) => subcategory.subCategoryName
        )
      )
    }
    if (event.target.name === "subcategory") {
      axios
        .get(
          `http://localhost:1337/sub-sections?subcategoryName=${event.target.value}`
        )
        .then((resp: any) => {
          setSubSection(() =>
            resp.data.map((subsections) => subsections.subsection)
          )
        })
    }
  }
  console.log(userAdForm)
  return (
    <div className="newadd">
      <Grid container>
        <Grid item xs={12} sm={4} md={4} lg={4} mb={5}>
          <h5>Preview</h5>
          <FeedAd
            title={userAdForm.title}
            description={userAdForm.description}
            variant="feedAd"
            imgSource=""
          />
        </Grid>
      </Grid>
      <form onSubmit={submitHandler}>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField
              id="title"
              className="newadd__leftcolon"
              label="Title *"
              name="title"
              variant="outlined"
              onInput={(event: any) => {
                handleChange(event)
              }}
              value={userAdForm.title}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Select
              inputField={{
                id: "city",
                name: "city",
                label: "City",
                type: "select",
                required: true,
                options: citiesEn,
              }}
              value={userAdForm.city}
              handleChange={(event: any) => handleChange(event)}
            />
          </Grid>
        </Grid>
        <Grid container mt={3}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField
              id="description"
              className="newadd__textarea"
              label="Short description *"
              name="description"
              multiline
              rows={4}
              onInput={(event: any) => {
                handleChange(event)
              }}
              value={userAdForm.description}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Select
              inputField={{
                id: "category",
                name: "category",
                label: "Category *",
                type: "select",
                required: true,
                options: categories.map((category) => category.categoryName),
              }}
              value={selectedCategory}
              handleChange={(event: any) => handleChange(event)}
            />
            <Grid container mt={3}>
              <Select
                inputField={{
                  id: "subcategory",
                  name: "subcategory",
                  label: "Subcategory",
                  type: "select",
                  required: true,
                  options: subcategories,
                }}
                value={userAdForm.subcategory}
                handleChange={(event: any) => handleChange(event)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={3}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField
              id="price"
              className="newadd__leftcolon"
              label="Price *"
              name="price"
              variant="outlined"
              onInput={(event: any) => {
                handleChange(event)
              }}
              value={userAdForm.price}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            {subSection.length > 0 ? (
              <Select
                inputField={{
                  id: "subSection",
                  name: "subSection",
                  label: "Section",
                  type: "select",
                  required: true,
                  options: subSection,
                }}
                value={userAdForm.subSection}
                handleChange={(event: any) => handleChange(event)}
              />
            ) : (
              <div></div>
            )}
          </Grid>
          <Grid item xs={12} mt={3}>
            <TextField
              id="content"
              className="newadd__mainarea"
              label="Main Content *"
              name="content"
              multiline
              rows={7}
              onInput={(event: any) => {
                handleChange(event)
              }}
              value={userAdForm.content}
            />
          </Grid>
        </Grid>
        <Grid container mt={3}>
          <input type="file" name="files" multiple onChange={test} />
        </Grid>
        <Grid container justifyContent="center">
          <Button type="submit" variant="primary" disabled={false} size="lg">
            Save&Post
          </Button>
        </Grid>
      </form>
    </div>
  )
}

export default NewAddPage

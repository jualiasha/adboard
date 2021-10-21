import { Grid, TextField } from "@mui/material"
import React, { FC, useState } from "react"
import { IUserAd } from "../@types"
import FeedAd from "../components/FeedAd/FeedAd"
import Input from "../components/Inputs/Input"
import Select from "../components/Select/Select"
import { citiesEn } from "../utils/cities"
import ImageUploading from "react-images-uploading"
import { useSelector } from "react-redux"
import axios from "axios"
import Button from "../components/Buttons/Button"

const newadd: FC = () => {
  const [postAd, setPostAd] = useState<IUserAd>({
    title: "",
    description: "",
    content: "",
    city: "",
    cover: "",
    subcategories: "",
    subSection: "",
    tags: "",
    price: "",
  })

  const [images, setImages] = useState<[]>([])
  const maxNumber: number = 69
  const categories = useSelector((state: any) => state.categories)
  const [category, setCategory] = useState<string>("")
  const [subcategories, setSubcategories] = useState<string[]>(() => [])
  const [subSection, setSubSection] = useState<string[]>(() => [])
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }

  /* const errorTextHandler = (field: string) => {
        if (!postAd.title) {
            setErrorText(
                `${field.charAt(0).toUpperCase() + field.slice(1).toLowerCase()
                } is mandatory field`
            )
        }
    } */

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostAd({ ...postAd, [event.target.name]: event.target.value })
    setCategory(
      event.target.name === "category" ? event.target.value : category
    )

    if (event.target.name === "category") {
      const selectedSubcategories = categories
        .filter((category) => {
          return category.categoryName === event.target.value
        })
        .map((category) => {
          return category.subcategories
        })

      setSubcategories(() =>
        selectedSubcategories[0].map(
          (subcategory) => subcategory.subCategoryName
        )
      )
    }
    if (event.target.name === "subcategories") {
      axios
        .get(
          `http://localhost:1337/sub-sections?subcategoryName=${event.target.value}`
        )
        .then((resp) => {
          setSubSection(() =>
            resp.data.map((subsections) => subsections.subsection)
          )
        })
      /* errorTextHandler(event.target.name) */
    }
  }
  console.log(postAd)
  return (
    <div className="newadd">
      <Grid container>
        <Grid item xs={12} sm={4} md={4} lg={4} mb={5}>
          <h5>Preview</h5>
          <FeedAd
            title={postAd.title}
            description={postAd.description}
            variant="feedAd"
            imgSource=""
          />
        </Grid>
      </Grid>
      <form>
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
              value={postAd.city}
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
                options: categories.map((categor) => categor.categoryName),
              }}
              value={category}
              handleChange={(event: any) => handleChange(event)}
            />
            <Grid container mt={3}>
              <Select
                inputField={{
                  id: "subcategories",
                  name: "subcategories",
                  label: "Subcategories",
                  type: "select",
                  required: true,
                  options: subcategories,
                }}
                value={postAd.subcategories}
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
                value={postAd.subSection}
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
            />
          </Grid>
        </Grid>
        <Grid container mt={3}>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="newadd__images">
                <button
                  className="newadd__images__uploadbutton"
                  onClick={onImageUpload}
                >
                  Upload images
                </button>
                &nbsp;
                <button
                  onClick={onImageRemoveAll}
                  className="newadd__images__removeall"
                >
                  Remove all images
                </button>
                <div className="newadd__images__list">
                  {imageList.map((image, index) => (
                    <div key={index} className="newadd__images__list__item">
                      <img
                        className="newadd__images__list__item__img"
                        src={image["data_url"]}
                        alt=""
                        width="100"
                      />
                      <div className="newadd__images__list__item__btn-wrapper">
                        <button onClick={() => onImageUpdate(index)}>
                          Update
                        </button>
                        <button onClick={() => onImageRemove(index)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ImageUploading>
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

export default newadd

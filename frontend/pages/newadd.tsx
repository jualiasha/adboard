import { Grid, TextField } from "@mui/material"
import React, { FC, useState } from "react"
import { IUserAd } from "../@types"
import FeedAd from "../components/FeedAd/FeedAd"
import Input from "../components/Inputs/Input"
import Select from "../components/Select/Select"
import { citiesEn } from "../utils/cities"

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
  const [errorText, setErrorText] = useState<string>("")

  const errorTextHandler = (field: string) => {
    if (!postAd.title) {
      setErrorText(
        `${
          field.charAt(0).toUpperCase() + field.slice(1).toLowerCase()
        } is mandatory field`
      )
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostAd({ ...postAd, [event.target.name]: event.target.value })
    /* errorTextHandler(event.target.name) */
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
            {/* <Input
              inputType="text"
              inputLabel="Title *"
              inputId="title"
              inputName="title"
              inputHandler={(event: any) => {
                handleChange(event)
              }}
              disabled={false}
              readOnly={false}
              required={true}
              errorText={errorText}
              variant="newadd__input"
            /> */}
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
        </Grid>
        <Grid container mt={3}>
          <Grid item xs={12}>
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
      </form>
    </div>
  )
}

export default newadd

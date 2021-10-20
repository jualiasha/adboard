import { Grid } from "@mui/material"
import React, { FC } from "react"
import FeedAd from "../components/FeedAd/FeedAd"
import Input from "../components/Inputs/Input"

const newadd: FC = () => {
  return (
    <div className="newadd">
      <Grid container>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <FeedAd title="" description="" variant="feedAd" imgSource="" />
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between">
        <form>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Input
                  inputType="text"
                  inputLabel="Title *"
                  inputId="title"
                  inputName="title"
                  inputHandler={() => {}}
                  disabled={false}
                  readOnly={false}
                  required={true}
                  errorText="Title is mandatory field"
                  variant="newadd__inputlabel"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}></Grid>
        </form>
      </Grid>
    </div>
  )
}

export default newadd

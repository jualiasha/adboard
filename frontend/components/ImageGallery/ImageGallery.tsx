import {
  Backdrop,
  Fade,
  ImageList,
  ImageListItem,
  Modal,
  Pagination,
  Stack,
} from "@mui/material"
import React, { FC, useState } from "react"
import { IUserAd } from "../../@types"
import usePagination from "./Pagination"
/* import { Swiper, SwiperSlide } from "swiper/react" */

interface IImageGallery {
  ad: IUserAd
}

const ImageGallery: FC<IImageGallery> = ({ ad }) => {
  let [slide, setSlide] = useState(1)
  /* const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false) */
  const PER_PAGE = 4
  const images = ad.gallery?.map((image) => {
    return {
      img: image.url,
      alt: ad.title,
    }
  })
  const count = Math.ceil(images.length / PER_PAGE)
  const _DATA = usePagination(images, PER_PAGE)

  const handleChange = (e, p) => {
    setSlide(p)
    _DATA.jump(p)
  }
  return (
    <>
      <ImageList
        sx={{ height: "55vh", /* overflowY: "hidden", */ gap: "1vh" }}
        rowHeight={164}
        cols={2}

        /* rowHeight={100} */
      >
        {_DATA?.currentData().map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=contain&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=contain&auto=format&dpr=2 2x`}
              alt={item.alt}
              loading="lazy"
              className="adPage__img"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Stack spacing={2} mt={2}>
        <Pagination
          count={count}
          variant="outlined"
          color="primary"
          onChange={handleChange}
          page={slide}
          style={{ margin: "0 auto" }}
        />
      </Stack>
      {/*  <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={3}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </Fade>
      </Modal> */}
    </>
  )
}

export default ImageGallery

import React, { FC, useState } from "react"
import { itemsToArray } from "../../utils"
import Button from "../Buttons/Button"
import styles from "./ImageInput.module.scss"

interface IImageInputProps {
  handleFileChange: (event: any) => void
}

const ImageInput: FC<IImageInputProps> = ({ handleFileChange }) => {
  const [selectedFiles, setSelectedFiles] = useState<any>(() => [])

  const onSelectFile = async (event: any) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFiles(undefined)
      return
    }

    // I've kept this example simple by using the first image instead of multiple
    const imageArray = itemsToArray(event.target.files).filter((image: any) => {
      return image.size
    })
    let imgUrl = null
    async function setUrls(image: any, index: number) {
      const fileReader = new FileReader()
      fileReader.onload = function (event: any) {
        imgUrl = event.target.result
        imageArray[index].preview = imgUrl
        if (index === imageArray.length - 1) {
          setSelectedFiles(imageArray)
        }
      }
      fileReader.readAsDataURL(image)
    }
    imageArray.forEach(async (image: any, index: number) => {
      await setUrls(image, index)
    })
  }

  const handleReomveImage = (imageName: string) => {
    const newArr = selectedFiles.filter((file: any) => {
      return file.name !== imageName
    })
    setSelectedFiles(newArr)
  }

  return (
    <div className={styles.imgFileInput}>
      <label htmlFor="files" className={styles.label}>
        Select images {selectedFiles.length} kuvaa
      </label>
      <input
        type="file"
        name="files"
        id="files"
        multiple={true}
        className={styles.input}
        onChange={onSelectFile}
      />
      <div className={styles.imgPreview}>
        {selectedFiles &&
          selectedFiles.map((file: any) => {
            return (
              <div tabIndex={0} key={file.size}>
                <img src={file.preview} alt="image" className={styles.img} />
                <Button
                  variant="destructive"
                  size="sm"
                  disabled={false}
                  type="button"
                  handleClick={() => handleReomveImage(file.name)}
                >
                  Remove image
                </Button>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ImageInput

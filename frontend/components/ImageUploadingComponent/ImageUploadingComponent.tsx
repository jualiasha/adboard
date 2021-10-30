import React, { FC } from "react"
import ImageUploading from "react-images-uploading"

interface IImageUploadingComponent {
  value: any[]
  onChange: (imageList, addUpdateIndex) => void
  maxNumber: number
}

const ImageUploadingComponent: FC<IImageUploadingComponent> = ({
  value,
  onChange,
  maxNumber,
}) => {
  const inputProps = {
    name: "files",
  }
  return (
    <ImageUploading
      multiple
      value={value}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
      inputProps={inputProps}
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
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
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </ImageUploading>
  )
}

export default ImageUploadingComponent

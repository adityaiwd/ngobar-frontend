import React, { useEffect, useState } from "react";
import unsplash from "../api/unsplash";

const ImageList = () => {
  const [listOfImage, setListOfImage] = useState([]);
  const imageArray = JSON.stringify(listOfImage);
  console.log(typeof imageArray)
  console.log(typeof listOfImage)
  useEffect(() => {
    const fetchImage = async () => {
      const res = await unsplash.get(`/photos`, {
        params: { per_page: 15 },
      });
      setListOfImage(res.data);
    };
    fetchImage();
  }, [imageArray]);
  return (
    <div className="ui three column stackable grid">
      {listOfImage.map((image) => (
        <div className="column">
          <img
            className="ui centered image"
            src={image.urls.regular}
            alt=""
            key={image.id}
            style={{ height: 350, width: 350, objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageList;

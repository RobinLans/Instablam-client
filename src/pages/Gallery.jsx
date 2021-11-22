import React, { useState, useEffect } from "react";
import { BsArrowLeft, BsImages } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ImageCard from "../components/ImageCard";

function Gallery() {
  const navigate = useNavigate();
  const [images, setImages] = useState(
    JSON.parse(localStorage.getItem("imgs"))
  );
  const [imagesToShow, setImagesToShow] = useState(images);

  useEffect(() => {
    setImagesToShow(JSON.parse(localStorage.getItem("imgs")));
  }, [images]);

  function goBack() {
    console.log("go back");
    navigate("/", { replace: true });
  }

  function removeImage(index) {
    imagesToShow.splice(index, 1);
    localStorage.setItem("imgs", JSON.stringify(imagesToShow));
    setImages(imagesToShow);
  }

  return (
    <div className="w-screen h-screen md:w-5/6 xl:w-3/4 flex flex-col items-center ">
      <button onClick={goBack} className="backArrow">
        <BsArrowLeft />
      </button>
      <div className="flex items-center justify-center p-2 bg-white w-screen ">
        <BsImages className="text-7xl mr-2" />
        <h1 className="text-3xl ml-2">Gallery</h1>
      </div>
      <div className="w-screen flex flex-col items-center md:w-full md:grid md:grid-cols-2  xl:grid-cols-3">
        {imagesToShow?.map((img, i) => {
          return (
            <ImageCard img={img} index={i} key={i} removeImage={removeImage} />
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;

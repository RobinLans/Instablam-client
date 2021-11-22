import React from "react";
import { BsArrowLeft, BsImages } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ImageCard from "../components/ImageCard";

function Gallery() {
  const navigate = useNavigate();

  const imageGallery = JSON.parse(localStorage.getItem("imgs"));

  function goBack() {
    console.log("go back");
    navigate("/", { replace: true });
  }

  function removeImage(index) {
    console.log(index);
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
        {imageGallery?.map((img, i) => {
          return (
            <ImageCard img={img} index={i} key={i} removeImage={removeImage} />
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;

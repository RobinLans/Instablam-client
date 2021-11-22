import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";

function ImageCard({ img, index, removeImage }) {
  const [btnHover, setButtonHover] = useState(false);

  console.log(img);

  return (
    <section className="imgCard ">
      <img
        className="h-24 w-24 rounded cursor-pointer"
        src={img.src}
        alt="selfie"
      />
      <article className="imgCardInfo">
        <div>
          {!img.place.error ? (
            <>
              <p>{img.place.country}</p>
              <p>{img.place.city}</p>
            </>
          ) : (
            <p>{img.place.error}</p>
          )}
        </div>
        <p className="text-sm m-0 opacity-70">{img.date}</p>
      </article>
      <button
        className={`flex justify-center items-center group w-16 h-16 rounded-full mr-1 ${
          btnHover ? "bg-black bg-opacity-10" : ""
        } `}
        onMouseEnter={() => {
          setButtonHover(true);
        }}
        onMouseLeave={() => {
          setButtonHover(false);
        }}
        onClick={() => {
          removeImage(index);
        }}
      >
        <BsFillTrashFill
          className={` ${
            btnHover ? "text-red-800" : "text-red-500"
          }  text-4xl `}
        />
      </button>
    </section>
  );
}

export default ImageCard;

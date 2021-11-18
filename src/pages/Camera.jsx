import React, { useState, useRef, useCallback } from "react";
import { BsCameraFill, BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

const videoConstraints = {
  aspectRatio: 1,
  facingMode: "user",
};

function Camera() {
  const webcamRef = useRef(null);
  const [imageSource, setImageSource] = useState(null);
  let navigate = useNavigate();

  const capture = useCallback(() => {
    setImageSource(webcamRef.current.getScreenshot());
  }, [webcamRef, setImageSource]);

  function goBack() {
    console.log("go back");
    navigate("/", { replace: true });
  }

  return (
    <>
      <button onClick={goBack} className="rotate-3 active:text-primary">
        <BsArrowLeft className="absolute text-4xl left-2 top-1 " />
      </button>
      <h1 className="text-3xl mb-6">Take a nice photo</h1>
      <div className="bg-black w-72 h-72 rounded-3xl overflow-hidden">
        <Webcam
          audio={false}
          ref={webcamRef}
          height={400}
          width={300}
          videoConstraints={videoConstraints}
          screenshotFormat="image/jpeg"
        />
      </div>

      <button
        className="flex h-24 w-24 border-black border-4 justify-center items-center rounded-full mt-10 active:text-primary active:border-primary"
        onClick={capture}
      >
        <BsCameraFill className="text-5xl " />
      </button>
    </>
  );
}

export default Camera;

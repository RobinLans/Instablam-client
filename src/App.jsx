import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Camera from "./pages/Camera";
import Gallery from "./pages/Gallery";

function App() {
  const imageGallery = [
    {
      src: "https://i.imgur.com/fN3vC4M.png",
      place: {
        city: "Göteborg",
        country: "Sweden",
      },
      date: "12-07-2020",
    },
    {
      src: "https://i.imgur.com/F8Jo6ea.png",
      place: {
        city: "Skärgården",
        country: "Sweden",
      },
      date: "11-04-2021",
    },
  ];

  useEffect(() => {
    const imagesInLS = JSON.parse(localStorage.getItem("imgs"));

    if (!imagesInLS || imagesInLS.length === 0) {
      localStorage.setItem("imgs", JSON.stringify(imageGallery));
    }
  }, []);

  return (
    <div className="flex flex-col h-screen font-body font-bold justify-center items-center ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Camera from "./pages/Camera";
import Gallery from "./pages/Gallery";

function App() {
  const [hover, setHover] = useState(false);

  return (
    <body className="flex flex-col h-screen font-body font-bold justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </body>
  );
}

export default App;

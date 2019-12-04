import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Slide from "./components/Slide";
import LeftArrow from "./components/LeftArrow";
import RightArrow from "./components/RightArrow";

const App = () => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const loadImages = () => {
      fetch("http://www.splashbase.co/api/v1/images/latest")
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          let imageUrls = data.images.map(r => r.url);
          setImages(imageUrls);
        });
    };
    loadImages();
  }, []);

  const goLeft = () => {
    if (currentImage >= 1) {
      setCurrentImage(currentImage - 1);
    }
  };

  const goRight = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <div className="container">
      <div className="slider-wrapper">
        {images.map((imageSrc, i) =>
          i === currentImage ? (
            <Slide imageSrc={imageSrc} key={i} center={true}></Slide>
          ) : (
            <Slide imageSrc={imageSrc} key={i} center={false}></Slide>
          )
        )}
      </div>

      <LeftArrow goLeft={goLeft}></LeftArrow>
      <RightArrow goRight={goRight}></RightArrow>
    </div>
  );
};

export default App;

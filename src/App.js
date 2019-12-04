import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Slide from "./components/Slide";
import SlideArrow from "./components/SlideArrow";

const App = () => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(1);
  const [xPosition, setXPosition] = useState(-50);

  useEffect(() => {
    const loadImages = () => {
      fetch("https://api.github.com/users?since=135")
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          let imageUrls = data.map(r => r.avatar_url);
          setImages(imageUrls);
        });
    };
    loadImages();
  }, []);

  const goLeft = () => {
    if (currentImage >= 1) {
      setCurrentImage(currentImage - 1);
      setXPosition(xPosition + 235);
    }
  };

  const goRight = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
      setXPosition(xPosition - 235);
    }
  };

  return (
    <div className="container">
      <div
        className="slider-wrapper"
        style={{
          transform: `translateX(${xPosition}px)`,
          transition: "transform ease-out 0.6s"
        }}
      >
        {images.map((imageSrc, i) => (
          <Slide
            imageSrc={imageSrc}
            key={i}
            center={i === currentImage}
          ></Slide>
        ))}
      </div>

      <div className="background">
        <SlideArrow onClickHandle={goLeft} type="prev"></SlideArrow>
        <SlideArrow onClickHandle={goRight} type="next"></SlideArrow>
      </div>
    </div>
  );
};

export default App;

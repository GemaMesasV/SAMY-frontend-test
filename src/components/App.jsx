import { useState, useEffect } from "react";

import { AllImagesUseCase } from "../usecases/all-images.usecase";
import { SearchImagesUseCase } from "../usecases/search-images.usecase";
import { LikeImageUseCase } from "../usecases/like-image.usecase";
import Header from "./Header";
import Main from "./Main";

import "../styles/Reset.scss";
import "./style.scss";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    AllImagesUseCase.execute().then((data) => setImages(data));
  }, []);

  const handleSubmit = (e, search) => {
    e.preventDefault();
    SearchImagesUseCase.execute(search).then((data) => setImages(data));
  };

  const handleLike = (id) => {
    LikeImageUseCase.execute(id, images).then((data) => setImages(data));
  };

  return (
    <>
      <Header handleSubmit={handleSubmit} />
      <Main handleLike={handleLike} images={images} />
    </>
  );
}

export default App;

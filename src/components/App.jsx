import { useState, useEffect } from "react";

import { GetImagesUseCase } from "../usecases/get-images.usecase";
import { SearchImagesUseCase } from "../usecases/search-images.usecase";
import { LikeImageUseCase } from "../usecases/like-image.usecase";
import Header from "./Header";
import Main from "./Main";

import "../styles/Reset.scss";
import "./style.scss";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    GetImagesUseCase.execute(page).then((data) => setImages(data));
  }, []);

  const fetchNextPage = () => {
    if (searchValue) {
      SearchImagesUseCase.execute(searchValue, page + 1).then((data) => {
        setImages([...images, ...data]);
        setPage(page + 1);
      });
    } else {
      GetImagesUseCase.execute(page + 1).then((data) => {
        setImages([...images, ...data]);
        setPage(page + 1);
      });
    }
  };

  const handleSubmit = (e, search) => {
    e.preventDefault();
    SearchImagesUseCase.execute(search, 1).then((data) => {
      setImages(data);
      setPage(1);
      setSearchValue(search);
    });
  };

  const handleLike = (id) => {
    LikeImageUseCase.execute(id, images).then((data) => setImages(data));
  };

  return (
    <>
      <Header handleSubmit={handleSubmit} />
      <Main
        handleLike={handleLike}
        images={images}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
}

export default App;

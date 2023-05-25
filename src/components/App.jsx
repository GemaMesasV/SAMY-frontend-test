import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateRight,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import { AllImagesUseCase } from "../usecases/all-images.usecase";
import { SearchImagesUseCase } from "../usecases/search-images.usecase";
import { LikeImageUseCase } from "../usecases/like-image.usecase";

import headerLogo from "../assets/header-logo.png";

import "../styles/App.scss";
import "../styles/Reset.scss";

function App() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    AllImagesUseCase.execute().then((data) => setImages(data));
  }, []);

  const greyCards = [
    "Who's gonna drive you",
    "Teamaker",
    "Wheatness",
    "Desert",
    "A forest with no wolves",
  ];

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SearchImagesUseCase.execute(search).then((data) => setImages(data));
  };

  const handleLike = (id) => {
    LikeImageUseCase.execute(id, images).then((data) => setImages(data));
  };

  return (
    <>
      <header className="header">
        <a href="/">
          <img
            id="headerLogo"
            src={headerLogo}
            className="header__logo"
            alt="Header logo"
          />
        </a>

        <form onSubmit={handleSubmit}>
          <label htmlFor="searchInput"></label>
          <input
            className="header__form--input"
            type="text"
            id="searchInput"
            placeholder="🔍  You're looking for something?"
            value={search}
            onChange={handleSearch}
          />
        </form>
      </header>
      <main className="main">
        <div id="card" className="main__cards">
          {images.map((image) => {
            return (
              <div
                className={`main__cards--item card-container ${
                  greyCards.includes(image.title) ? "special" : ""
                }`}
                key={image.id}
              >
                <span className="card-container__price">
                  {image.price} <span>€</span>
                </span>
                <div
                  id="likeIcon"
                  className={`card-container__like${
                    image.liked ? "--selected" : ""
                  }`}
                  onClick={() => handleLike(image.id)}
                >
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    flip="horizontal"
                    size="xl"
                    style={{ color: "white" }}
                  />
                </div>
                <span
                  id="likeNumber"
                  className="card-container__like--number not-selectable"
                >
                  {image.likes_count}
                </span>
                <div className="card-container__reload">
                  <FontAwesomeIcon
                    icon={faArrowRotateRight}
                    flip="horizontal"
                    size="xl"
                    style={{ color: "white" }}
                  />
                </div>
                <span className="card-container__reload--number not-selectable">
                  {" "}
                  0
                </span>

                <img
                  className="main__cards--item--image not-selectable"
                  src={image.main_attachment.big}
                  alt={image.title}
                ></img>
                <p className="main__cards--item--title not-selectable">
                  {image.title}
                </p>
                <p className="main__cards--item--author not-selectable">
                  <span>by</span> {image.author}
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;

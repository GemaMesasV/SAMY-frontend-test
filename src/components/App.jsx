import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateRight,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import { AllImagesUseCase } from "../usecases/all-images.usecase";

import headerLogo from "../assets/header-logo.png";

import "../styles/App.scss";
import "../styles/Reset.scss";

function App() {
  const [images, setImages] = useState([]);

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

  return (
    <>
      <header className="header">
        <img src={headerLogo} className="header__logo" alt="Header logo" />
        <form>
          <label htmlFor="searchInput"></label>
          <input
            className="header__form--input"
            type="text"
            id="searchInput"
            placeholder="🔍  You're looking for something?"
          />
        </form>
      </header>
      <main className="main">
        <div className="main__cards">
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
                <div className="card-container__like">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    flip="horizontal"
                    size="xl"
                    style={{ color: "white" }}
                  />
                </div>
                <span className="card-container__like--number">
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
                <span className="card-container__reload--number"> 0</span>

                <img
                  className="main__cards--item--image"
                  src={image.main_attachment.big}
                  alt={image.title}
                ></img>
                <p className="main__cards--item--title">{image.title}</p>
                <p className="main__cards--item--author">
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

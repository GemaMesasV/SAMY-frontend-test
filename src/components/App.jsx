import { useState, useEffect } from "react";
import headerLogo from "../assets/header-logo.png";

import "../styles/App.scss";
import "../styles/Reset.scss";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/images?search=grey")
      .then((response) => {
        return response.json();
      })
      .then((images) => {
        setImages(images);
      });
  }, []);
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
              <div className="main__cards--item" key={image.id}>
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

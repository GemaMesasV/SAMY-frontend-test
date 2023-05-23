import { useState, useEffect } from "react";
import headerLogo from "./assets/header-logo.png";

import "./App.scss";

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
            placeholder="🔍 You're looking for something?"
            // style={{
            //   backgroundImage: `url(assets/magnifying-glass.svg)`,
            //   backgroundPosition: "left center",
            //   backgroundRepeat: "no-repeat",
            //   paddingLeft: "30px",
            // }}
          />
        </form>
      </header>
      <main>
        <div>
          {images.map((image) => {
            return (
              <img
                key={image.id}
                src={image.main_attachment.big}
                alt={image.title}
              ></img>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;

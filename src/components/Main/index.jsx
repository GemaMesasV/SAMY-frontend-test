import PropTypes from "prop-types";
import Card from "../Card";

import "./style.scss";

function Main({ images, handleLike }) {
  return (
    <main className="main">
      <div
        id="card"
        className={`main__cards${images.length === 1 ? "--one" : ""}`}
      >
        {images.map((image) => {
          return <Card key={image.id} image={image} handleLike={handleLike} />;
        })}
      </div>
    </main>
  );
}
Main.propTypes = {
  images: PropTypes.array.isRequired,
  handleLike: PropTypes.func.isRequired,
};
export default Main;

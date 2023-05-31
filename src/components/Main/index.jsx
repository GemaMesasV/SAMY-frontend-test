import PropTypes from "prop-types";
import Card from "../Card";
import InfiniteScroll from "react-infinite-scroll-component";

import "./style.scss";

function Main({ images, handleLike, fetchNextPage }) {
  return (
    <main className="main">
      <InfiniteScroll
        id="card"
        className={`main__cards${images.length === 1 ? "--one" : ""}`}
        dataLength={images.length}
        next={fetchNextPage}
        hasMore={true}
      >
        {images.map((image) => {
          return <Card key={image.id} image={image} handleLike={handleLike} />;
        })}
      </InfiniteScroll>
    </main>
  );
}
Main.propTypes = {
  images: PropTypes.array.isRequired,
  handleLike: PropTypes.func.isRequired,
  fetchNextPage: PropTypes.func.isRequired,
};
export default Main;

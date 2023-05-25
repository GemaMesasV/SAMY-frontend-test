import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateRight,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

const greyCards = [
  "Who's gonna drive you",
  "Teamaker",
  "Wheatness",
  "Desert",
  "A forest with no wolves",
];

function Card({ image, handleLike }) {
  return (
    <div className={`card ${greyCards.includes(image.title) ? "special" : ""}`}>
      <span className="card__price">
        {image.price} <span>€</span>
      </span>

      <img
        className="card__image not-selectable"
        src={image.main_attachment.big}
        alt={image.title}
      ></img>
      <h2 className="card__title not-selectable">{image.title}</h2>
      <h3 className="card__author not-selectable">
        <span>by</span> {image.author}
      </h3>
      <div className="card__footer">
        <div className="card__like">
          <div
            id="likeIcon"
            className={`card__like-btn${image.liked ? "--selected" : ""}`}
            onClick={() => handleLike(image.id)}
          >
            <FontAwesomeIcon icon={faThumbsUp} flip="horizontal" size="xl" />
          </div>
          <span
            id="likeNumber"
            className="card__like-btn--number not-selectable"
          >
            {image.likes_count}
          </span>
        </div>
        <div className="card__reload">
          <div className="card__reload-btn">
            <FontAwesomeIcon
              icon={faArrowRotateRight}
              flip="horizontal"
              size="xl"
            />
          </div>
          <span className="card__reload-btn--number not-selectable"> 0</span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.object.isRequired,
  handleLike: PropTypes.func.isRequired,
};

export default Card;

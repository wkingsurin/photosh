import cardStyles from "./Card.module.scss";
import scaledImageStyles from "./ScaledImage.module.scss";

import { LikeEmpty } from "../Icons";
import { setCurrentScroll, getFullName, getScaledPerson } from "../../utils";

export function Card(props) {
  const { image, name, onClickCard, setGalleryState, isLiked, personId } =
    props;

  return (
    <div
      className={cardStyles.card}
      onClick={(e) => onClickCard(e, setGalleryState)}
      id={personId}
    >
      <div className={cardStyles.cardInner}>
        <div className={cardStyles.image}>
          <img src={image} alt={name} />
        </div>
        <div className={cardStyles.cardPanel}>
          <div className={cardStyles.like} id="like">
            <LikeEmpty
              styles={cardStyles}
              isLiked={isLiked}
              personId={personId}
            />
          </div>
          <span className={cardStyles.name}>{name}</span>
        </div>
      </div>
    </div>
  );
}

export function ScaledImage(props) {
  const { galleryState, personId } = props;
  const person = getScaledPerson(galleryState);

  return (
    <div
      className={scaledImageStyles.modal}
      style={{ top: setCurrentScroll() }}
      onClick={(e) => props.onClickScaledImage(e, props.setGalleryState)}
    >
      <div className={scaledImageStyles.content}>
        <div className={scaledImageStyles.image}>
          <img
            src={person.imageUrl}
            alt={getFullName(person.name, person.surname)}
          />
        </div>
        <div className={scaledImageStyles.like} id="like">
          <LikeEmpty
            styles={scaledImageStyles}
            isLiked={props.isLiked}
            personId={personId}
          />
        </div>
      </div>
      <div className={scaledImageStyles.overlay} id="overlay"></div>
    </div>
  );
}

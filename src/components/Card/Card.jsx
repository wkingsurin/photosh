import cardStyles from "./Card.module.scss";
import scaledImageStyles from "./ScaledImage.module.scss";

import { LikeEmpty } from "../Icons";

export function Card(props) {
  const { image, name, onClickCard, setScaledImage } = props;

  return (
    <div
      className={cardStyles.card}
      onClick={(e) => onClickCard(e, setScaledImage)}
    >
      <div className={cardStyles.cardInner}>
        <div className={cardStyles.image}>
          <img src={image} alt={name} />
        </div>
        <div className={cardStyles.cardPanel}>
          <div className={cardStyles.like}>
            <LikeEmpty styles={cardStyles} />
          </div>
          <span className={cardStyles.name}>{name}</span>
        </div>
      </div>
    </div>
  );
}

export function ScaledImage(props) {
  return (
    <div
      className={scaledImageStyles.modal}
      style={{ top: props.position }}
      onClick={(e) => props.onClickScaledImage(e, props.setScaledImage)}
    >
      <div className={scaledImageStyles.content}>
        <div className={scaledImageStyles.image}>
          <img src={props.imageUrl} alt={props.name} />
        </div>
        <div className={scaledImageStyles.like}>
          <LikeEmpty styles={scaledImageStyles} />
        </div>
      </div>
      <div className={scaledImageStyles.overlay} id="overlay"></div>
    </div>
  );
}

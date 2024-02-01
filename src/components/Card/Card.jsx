import cardStyles from "./Card.module.scss";

import { LikeEmpty } from "../Icons";

export function Card(props) {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.cardInner}>
        <div className={cardStyles.image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={cardStyles.cardPanel}>
          <div className={cardStyles.like}>
            <LikeEmpty />
          </div>
          <span className={cardStyles.name}>{props.name}</span>
        </div>
      </div>
    </div>
  );
}

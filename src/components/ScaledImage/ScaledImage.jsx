import scaledImageStyles from "./ScaledImage.module.scss";
import { LikeEmpty } from "../Icons";

export function ScaledImage(props) {
  return (
    <div className={scaledImageStyles.modal}>
      <div className={scaledImageStyles.content}>
        <div className={scaledImageStyles.image}>
          <img src={props.imageUrl} alt={props.name} />
        </div>
        <div className={scaledImageStyles.like}>
          <LikeEmpty styles={scaledImageStyles} />
        </div>
      </div>
      <div className={scaledImageStyles.overlay}></div>
    </div>
  );
}

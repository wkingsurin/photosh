import { targetIsImg, targetIsSvg, setCurrentScroll } from "./utils";

export const onClickCard = (e, setScaledImage) => {
  if (targetIsImg(e.target)) {
    setScaledImage((prev) => ({
      imageUrl: e.target.src,
      name: e.target.alt,
      position: setCurrentScroll(),
    }));
    document.body.style.overflow = "hidden";
  } else if (targetIsSvg(e.target)) {
    console.log("liked");
  } else return;
};

export const onClickScaledImage = (e, setScaledImage) => {
  if (targetIsImg(e.target)) {
    console.log("image");
  } else if (targetIsSvg(e.target)) {
    console.log("like");
  } else {
    setScaledImage(null);
    document.body.style.overflow = "";
    return;
  }
};

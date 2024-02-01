import { targetIsImg, targetIsSvg, getFullName, setOverflow } from "./utils";

export const onClickCard = (e, setGalleryState) => {
  if (targetIsImg(e.target)) {
    setGalleryState((cards) => {
      const newCards = cards.map((person) => {
        if (getFullName(person.name, person.surname) == e.target.alt) {
          return { ...person, isScaledImage: true };
        } else return person;
      });

      return newCards;
    });
    setOverflow(document.body, true);
  } else if (targetIsSvg(e.target)) {
    onClickLike(e.target.closest("svg"), setGalleryState);
  } else return;
};

export const onClickScaledImage = (e, setGalleryState) => {
  if (targetIsImg(e.target)) {
  } else if (targetIsSvg(e.target)) {
    onClickLike(e.target.closest("svg"), setGalleryState);
  } else {
    setGalleryState((cards) => {
      return cards.map((person) => {
        return { ...person, isScaledImage: false };
      });
    });
    setOverflow(document.body, false);
    return;
  }
};

export const onClickLike = (target, setGalleryState) => {
  setGalleryState((cards) => {
    const newCards = cards.map((person) => {
      if (target.id == person.id) {
        return { ...person, isLiked: !person.isLiked };
      } else return person;
    });

    return newCards;
  });
};

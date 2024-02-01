export function targetIsImg(target) {
  return target.closest("img");
}
export function targetIsSvg(target) {
  return target.closest("svg");
}
export function getWindowYScroll() {
  return window.scrollY;
}
export function setCurrentScroll() {
  return getWindowYScroll() + "px";
}

export function hideScrollBounce() {
  const body = document.body;
  const windowWidth = window.innerWidth;

  body.style.width = windowWidth + "px";
}

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

export function getFullName(name, surname) {
  return name + " " + surname;
}

export function getScaledPerson(galleryState) {
  const person = galleryState.filter((person) => {
    return person.isScaledImage == true;
  })[0];

  return person;
}

export function setOverflow(element, active) {
  return active
    ? (element.style.overflow = "hidden")
    : (element.style.overflow = "");
}

export function hideScrollBounce() {
  const body = document.body;
  const windowWidth = window.innerWidth;

  body.style.width = windowWidth + "px";
}

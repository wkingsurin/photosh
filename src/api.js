import { peopleRu, peopleEu } from "./people";
export const DELAY = 1500;

export function getPeopleRu() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(peopleRu);
    }, DELAY);
  });
}

export function getPeopleEu() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(peopleEu);
    }, DELAY);
  });
}

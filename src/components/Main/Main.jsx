import mainStyles from "./Main.module.scss";
import { useState } from "react";

import { peopleRu } from "../../people";

import { Card, ScaledImage } from "../Card";
import { onClickCard, onClickScaledImage } from "../../handlers";

export function Main() {
  const [galleryState, setGalleryState] = useState(
    peopleRu.map((person) => ({
      isScaledImage: false,
      isLiked: false,
      ...person,
    }))
  );

  return (
    <main className={mainStyles.main}>
      <section className={mainStyles.section}>
        <div className="container">
          <div className={mainStyles.content}>
            {galleryState.map((person) => {
              return (
                <Card
                  key={person.id}
                  personId={person.id}
                  image={person.imageUrl}
                  name={person.name + " " + person.surname}
                  onClickCard={onClickCard}
                  setGalleryState={setGalleryState}
                  isLiked={person.isLiked}
                />
              );
            })}
          </div>
        </div>
        {galleryState.map((person) => {
          return (
            person.isScaledImage && (
              <ScaledImage
                key={person.id}
                onClickScaledImage={onClickScaledImage}
                setGalleryState={setGalleryState}
                galleryState={galleryState}
                isLiked={person.isLiked}
                personId={person.id}
              />
            )
          );
        })}
      </section>
    </main>
  );
}

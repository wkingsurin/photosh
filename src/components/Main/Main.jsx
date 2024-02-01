import mainStyles from "./Main.module.scss";
import { useState } from "react";

import { peopleRu } from "../../people";

import { Card, ScaledImage } from "../Card";
import { onClickCard, onClickScaledImage } from "../../handlers";

export function Main() {
  const [scaledImage, setScaledImage] = useState(null);

  return (
    <main className={mainStyles.main}>
      <section className={mainStyles.section}>
        <div className="container">
          <div className={mainStyles.content}>
            {peopleRu.map((person) => {
              return (
                <Card
                  key={person.id}
                  image={person.imageUrl}
                  name={person.name + " " + person.surname}
                  onClickCard={onClickCard}
                  setScaledImage={setScaledImage}
                />
              );
            })}
          </div>
        </div>
        {scaledImage && (
          <ScaledImage
            imageUrl={scaledImage.imageUrl}
            name={scaledImage.name}
            position={scaledImage.position}
            onClickScaledImage={onClickScaledImage}
            setScaledImage={setScaledImage}
          />
        )}
      </section>
    </main>
  );
}

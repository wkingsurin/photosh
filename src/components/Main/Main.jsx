import mainStyles from "./Main.module.scss";

import { Card } from "../Card";

import { peopleRu, peopleEu } from "../../people";
import { getPeopleRu } from "../../api";

export function Main() {
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
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

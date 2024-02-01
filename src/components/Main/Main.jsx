import mainStyles from "./Main.module.scss";

import { Card } from "../Card";

export function Main() {
  return (
    <main className={mainStyles.main}>
      <section className={mainStyles.section}>
        <div className="container">
          <div className={mainStyles.content}>
            <Card image="./images/user_photo1.jpg" name="Иван Даль" />
            <Card image="./images/user_photo1.jpg" name="Иван Даль" />
            <Card image="./images/user_photo1.jpg" name="Иван Даль" />
            <Card image="./images/user_photo1.jpg" name="Иван Даль" />
          </div>
        </div>
      </section>
    </main>
  );
}

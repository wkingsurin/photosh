import { LogoSVG } from "../Icons";
import entranceStyles from "./Entrance.module.scss";

export function Entrance() {
  return (
    <div className={entranceStyles.entrance}>
      <div className="container">
        <div className={entranceStyles.content}>
          <div className={entranceStyles.logo}>
            <LogoSVG />
          </div>
          <form className={entranceStyles.modal}>
            <span className={entranceStyles.title}>Вход</span>
            <div className={entranceStyles.input}>
              <label htmlFor={name}>Имя</label>
              <input type="text" id="name" />
            </div>
            <div className={entranceStyles.input}>
              <label htmlFor="surname">Фамилия</label>
              <input type="text" id="surname" />
            </div>
            <span className={entranceStyles.divider} />
            <button type="submit" className={entranceStyles.submit}>
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

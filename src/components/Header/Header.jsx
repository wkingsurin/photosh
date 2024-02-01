import headerStyles from "./Header.module.scss";

import { LogoSVG, ProfileSVG } from "../Icons";

export function Header() {
  return (
    <header className={headerStyles.header}>
      <div className="container">
        <div className={headerStyles.content}>
          <div className={headerStyles.logo}>
            <LogoSVG />
          </div>
          <button className={headerStyles.profileButton}>
            <span className={headerStyles.name}>Глеб Барон</span>
            <div className={headerStyles.profile}>
              <ProfileSVG />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

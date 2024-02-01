import { useState } from "react";

import { Entrance } from "./components/Entrance";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

import { hideScrollBounce } from "./utils";

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  hideScrollBounce();

  return (
    <div className="wrapper">
      {isUserLoggedIn ? (
        <>
          <Header />
          <Main />
        </>
      ) : (
        <Entrance />
      )}
    </div>
  );
}

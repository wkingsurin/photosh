import { Header } from "./components/Header";
import { Main } from "./components/Main";

import { hideScrollBounce } from "./utils";

export default function App() {
  hideScrollBounce();

  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
}

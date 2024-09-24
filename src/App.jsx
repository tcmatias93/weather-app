import Header from "./components/Headers/Header";
import Main from "./components/Main";

import "./styles/components/App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const dark = true;
  return (
    <div className={`App-${dark ? "dark" : "light"}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;

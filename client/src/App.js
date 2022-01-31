/* JSX */
/* import Home from "./Pages/Home/Home"; */
/* CSS */
import "./Components/Profile/Profile.css";
import "./Components/Footer/Footer.css";
import "./Pages/Home/Home.css";
import "./App.css";
/* UTILS */
import PortfolioContainer from "./Components/PortfolioContainer";


if (module.hot) {
  module.hot.accept();
}

function App() {
  return (
    <div className="App">
      <PortfolioContainer />
    </div>
  );
}

export default App;

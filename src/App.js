/* JSX */
/* import Home from "./Pages/Home/Home"; */
/* CSS */
import "./Components/Profile/Profile.css"
import "./Components/Footer/Footer.css"
import "./Pages/Home/Home.css"
import "./App.css";
/* UTILS */
import Component from "./Components/Component";



if (module.hot) {
  module.hot.accept();
}

function App() {
  return (
    <div className="App">
     <Component/>
    </div>
  );
}

export default App;

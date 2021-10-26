import Profile from "./Pages/Home/Profile/Profile";
import "./Pages/Home/Profile/Profile.css"
import "./App.css";

if (module.hot) {
  module.hot.accept();
}

function App() {
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;

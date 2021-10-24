import Profile from "./Pages/Home/Profile";

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

import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Profile from "../../Components/Profile/Profile";


import './Home.css'

export default function Home(props) {
  return (
    <>
      <div className="home-container" id={props.id || ""}>
        <Header />
        <Profile />
        <Footer />

      </div>
    </>
  );
}

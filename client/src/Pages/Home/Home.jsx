import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Profile from "../../Components/Profile/Profile";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <Header />
        <Profile />
        <Footer />
      </div>
    </>
  );
}

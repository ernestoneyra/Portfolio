import React from "react";
import Footer from "../../Components/Footer/Footer";
import Profile from "../../Components/Profile/Profile";


export default function Home() {
  return (
    <>
      <div className="home-container">
        <Profile />
        <Footer />
      </div>
    </>
  );
}

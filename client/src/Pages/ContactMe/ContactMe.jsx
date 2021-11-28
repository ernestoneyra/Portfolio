import React, { useState } from "react";
import imgBack from "../../Materials/images/mailz.jpeg";
import load1 from "../../Materials/images/load2.gif";
import PageHeading from "../../utilities/PageHeading/PageHeading.jsx";
import ScrollService from "../../utilities/ScrollService.js";
import Animations from "../../utilities/Animations.js";

export default function ContactMe(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  let fadeInPageHandler = (page) => {
    if (!page.fadePage !== props.id) return;
    Animations.animations.fadePage(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentPageFadeIn.subscribe(fadeInPageHandler);

  return (
    <div className="main-container" id={props.id || ""}>
      <PageHeading title={"Kontakta mig"} subHeading={"Komma i kontakt"} />
      <div className="central-form">
        <div className="col">
          <h1 className="title">
            <span>Kontaktformulär</span>
          </h1>
          <a href="https://www.facebook.com/ernesto.neyra.18/">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.youtube.com/channel/UClbCcQ2gUR9qGT4TN-x4a1Q">
            <i className="fa fa-youtube-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/ernesto-neyra">
            <i className=" fa fa-linkedin-square"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <p>Skicka ditt mail hit!</p>
            <img src={imgBack} alt="mail ikon" />
          </div>
          <form>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" />

            <label htmlFor="message">Meddelande</label>
            <textarea type="text" id="message" />

            <div className="send-btn">
              <button type="submit">
                Skicka<i className=" fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

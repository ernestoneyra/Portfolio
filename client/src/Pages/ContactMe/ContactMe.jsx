import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

//Materials
import imgBack from "../../Materials/images/mailz.jpeg";
import load2 from "../../Materials/images/load2.gif";

//Utilities
import PageHeading from "../../utilities/PageHeading/PageHeading.jsx";
import ScrollService from "../../utilities/ScrollService.js";
import Animations from "../../utilities/Animations.js";

//CSS
import "./ContactMe.css";

export default function ContactMe(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post("/contact", data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  let fadeInPageHandler = (page) => {
    if (page.fadeInPage !== props.id) return;
    Animations.animations.fadeInPage(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentPageFadeIn.subscribe(fadeInPageHandler);

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <PageHeading title={"Kontakta mig"} subHeading={"Kom i kontakt med mig"} />
      <div className="central-form">
        <div className="col">
          <h1 className="title">
            <span className="h2">Kontaktformulär</span>
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
            <p className="h4">Skicka ditt mail hit!</p>
            <img src={imgBack} alt="mail ikon" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={handleEmail}
              value={email}
            />

            <label htmlFor="message">Meddelande</label>
            <textarea
              type="text"
              id="message"
              onChange={handleMessage}
              value={message}
            />

            <div className="send-btn">
              <button type="submit">
                Skicka
                <i className=" fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load2} alt="loading" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

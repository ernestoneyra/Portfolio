import React, { useEffect } from "react";
import PageHeading from "../../utilities/PageHeading/PageHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInPageHandler = (page) => {
    if (page.fadePage !== props.id) return;
    Animations.animations.fadeInPage(props.id);
  };

  console.log(props.id)



  const fadeInSubscription =
    ScrollService.currentPageFadeIn.subscribe(fadeInPageHandler);

  const PAGE_CONSTANTS = {
    description:
      "En framtida front-end utvecklare som söker LIA plats för april-juni 2022 perioden. Erfarenhet inom MERN stacken med viljan att lära mig mer. Redo för arbetsmarknaden juni 2022.",
    highlights: {
      bullets: [
        "Front-end utvecklare",
        "Hantera databaser",
        "MERN stack",
        "Avslutar studierna juni 2022",
      ],
      heading: "Höjdpunkter:",
    },
  };
  const renderedHighlights = () => {
    return PAGE_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container page-container" id={props.id || ""}>
      <div className="about-me-parent">
        <PageHeading title={"Om mig"} subHeading={"Varför välja mig?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {PAGE_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{PAGE_CONSTANTS.highlights.heading}</span>
              </div>
              {renderedHighlights()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn">
                {""}
                Anställ mig!
              </button>
              <a href="Ernesto.Neyra.CV.pdf" download="Ernesto.Neyra.CV.pdf">
                <button className="btn highlighted-btn">Hämta CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

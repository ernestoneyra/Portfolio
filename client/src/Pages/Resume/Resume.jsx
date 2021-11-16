import React, { useState } from "react";
import PageHeading from "../../utilities/PageHeading/PageHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOfffSetStyle, setCarousalOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet">
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    </div>;
  };

  const resumeBullets = [
    { label: "Utbildning", logoSrc: "education.svg" },
    { label: "Arbetserfarenhet", logoSrc: "work-history.svg" },
    { label: "Programming skills", logoSrc: "programming-skills.svg" },
    { label: "Projekt", logoSrc: "projects.svg" },
    { label: "Intressen", logoSrc: "interests.svg" },
  ];

  const programminSkillDetails = [
    { skill: "HTML", ratingPercentage: 50 },
    { skill: "CSS", ratingPercentage: 35 },
    { skill: "Javascript", ratingPercentage: 20 },
    { skill: "React JS", ratingPercentage: 25 },
    { skill: "Express JS", ratingPercentage: 5 },
    { skill: "Mongo DB", ratingPercentage: 10 },
    { skill: "Node JS", ratingPercentage: 10 },
  ];

  const projectDetails = [
      {
          title: "Personal Portfolio Website",
          duration: "2021",
          description: "Portfolio sida mina personliga projekt",
          subHeading: "Använda tekniner: React JS, Mongo DB",
          tutorial: "Ja"
      },
      {
        title: "E-handel projekt",
        duration: "2021",
        description: "E-handel sida skapad för min kurs i back-end",
        subHeading: "Använda tekniner: React JS, Mongo DB, Node JS",
        tutorial: "Ja"
    },
    {
        title: "Personal Portfolio Website",
        duration: "2021",
        description: "Portfolio sida mina personliga projekt",
        subHeading: "Använda tekniner: React JS, Mongo DB"
    },

  ]

  let fadeInPageHandler = (page) => {
    if (page.fadePage !== props.id) return;
    Animations.animations.fadeInPage(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentPageFadeIn.subscribe(fadeInPageHandler);

  return (
    <div className="resume-container page-container" id={props.id || ""}>
      <div className="resume-content">
        <PageHeading title={"Resume"} subHeading={"My formal bio details"} />
      </div>
    </div>
  );
}

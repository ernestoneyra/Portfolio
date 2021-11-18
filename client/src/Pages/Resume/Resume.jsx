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
      tutorial: "Ja",
    },
    {
      title: "E-handel projekt",
      duration: "2021",
      description: "E-handel sida skapad för min kurs i back-end",
      subHeading: "Använda tekniner: React JS, Mongo DB, Node JS",
      tutorial: "Ja",
    },
    {
      title: "Personal Portfolio Website",
      duration: "2021",
      description: "Portfolio sida mina personliga projekt",
      subHeading: "Använda tekniner: React JS, Mongo DB",
    },
  ];

  const resumeDetails = [
    /* EDUCATION */
    <div className="resume-page-container" key="education">
      <ResumeHeading
        heading={"EC Utbildning, Helsingborg"}
        subHeading={"Front-End Utveckling"}
        fromDate={"2020"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"SAMU & ISI, Tokyo"}
        subHeading={"Japanska"}
        fromDate={"2016"}
        toDate={"2018"}
      />
      <ResumeHeading
        heading={"Mittuniversitetet, Sundsvall"}
        subHeading={"Media- och kommunikationsvetenskap"}
        fromDate={"2012"}
        toDate={"2016"}
      />
      <ResumeHeading
        heading={"Västermalm gymnasium, Sundsvall"}
        subHeading={"Datavetenskap"}
        fromDate={"2006"}
        toDate={"2009"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-page-container" key="work-experience">
      <ResumeHeading
        heading={"Ability Hub, Helsingborg"}
        subHeading={"Tjänsteförmedlare"}
        fromDate={"2020"}
        toDate={"2020"}
      />
      <div className="experience-dscription">
        <span className="resume-description-text">
          Förmedlade företagets tjänster och produkter till nya och nuvarande
          kunder.
        </span>
      </div>
      {/* 
      <div className="experience-description">
        <span className="resume-description-text">
    -example
        </span>
        <br/>
        <span className="resume-description-text">
    -example 2
        </span>
      </div> */}

      <ResumeHeading
        heading={"Blueberry Språkresor. Helsingborg"}
        subHeading={"Språkrese förmedlare"}
        fromDate={"2019"}
        toDate={"2020"}
      />
      <div className="experience-dscription">
        <span className="resume-description-text">
          Förmedlare mellan personer som vill studera i Ryssland och Japan och
          skolor.
        </span>
      </div>
      <ResumeHeading
        heading={"Hotellet Södra Berget"}
        subHeading={"Receptionist"}
        fromDate={"2018"}
        toDate={"2019"}
      />
      <div className="experience-dscription">
        <span className="resume-description-text">
          Hanterade bokningar, försäljning och gästernas önskemål.
        </span>
      </div>
      <ResumeHeading
        heading={"Hotell One@Tokyo, Tokyo"}
        subHeading={"Front desk agent"}
        fromDate={"2018"}
        toDate={"2018"}
      />
      <div className="experience-dscription">
        <span className="resume-description-text">
          Hanterade bokningar, försäljning och gästernas önskemål.
        </span>
      </div>
    </div>,

    /* SKILLS */
    <div
      className="resume-page-container programming-skills-container"
      key="programming-skills"
    >
      {programminSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skiill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    /* PROJECTS */
    <div className="resume-page-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,
    /* INTERESTS */
    <div className="resume-page-container" key="interests">
      <ResumeHeading
        heading="Sport"
        description="Är intresserad av flera sporter, men mest fotboll och basket. Föredrar att spela mer än att titta på."
      />
      <ResumeHeading
        heading="Spel"
        description="Spelar video- och dataspel. Spelar för det mesta RPG spel. "
      />
      <ResumeHeading
        heading="Resa"
        description="Finns inte mycket som slår känslan man får när man kommer till en ny plats och upplever något fantastiskt."
      />
    </div>,
  ];

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

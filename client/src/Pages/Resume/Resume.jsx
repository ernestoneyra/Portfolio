import React, { useState } from "react";
import PageHeading from "../../utilities/PageHeading/PageHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInPageHandler = (page) => {
    if (page.fadePage !== props.id) return;

    Animations.animations.fadeInPage(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentPageFadeIn.subscribe(fadeInPageHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.duration ? (
            <div className="heading-date">{props.duration}</div>
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
        <div className="resume-heading-description">
          <span>{props.tutorial}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Utbildning", logoSrc: "education.svg" },
    { label: "Arbetserfarenhet", logoSrc: "work-history.svg" },
    { label: "Programmering", logoSrc: "programming-skills.svg" },
    { label: "Projekt", logoSrc: "projects.svg" },
    { label: "Intressen", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "HTML", ratingPercentage: 40 },
    { skill: "CSS", ratingPercentage: 35 },
    { skill: "Javascript", ratingPercentage: 20 },
    { skill: "React JS", ratingPercentage: 25 },
    { skill: "Express JS", ratingPercentage: 5 },
    { skill: "Mongo DB", ratingPercentage: 10 },
    { skill: "Node JS", ratingPercentage: 10 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: "2021",
      description: "Portfolio sida mina personliga projekt",
      subHeading: "Använda tekniner: React JS, Mongo DB",
      tutorial: "Tutorial",
    },
    {
      title: "E-handel projekt",
      duration: "2021",
      description: "E-handel sida skapad för min kurs i back-end",
      subHeading: "Använda tekniner: React JS, Mongo DB, Node JS",
      tutorial: "Tutorial",
    },
    {
      title: "Personal Portfolio Website",
      duration: "2021",
      description: "Portfolio sida mina personliga projekt",
      subHeading: "Använda tekniner: React JS, Mongo DB",
      tutorial: "Tutorial",
    },
  ];

  const resumeDetails = [
    <div className="resume-page-container" key="education">
      <ResumeHeading
        heading={"EC Utbildning, Helsingborg"}
        subHeading={"Front-End Utveckling"}
        duration={"2020-2022"}
      />

      <ResumeHeading
        heading={"SAMU & ISI, Tokyo"}
        subHeading={"Japanska"}
        duration={"2016-2018"}
      />
      <ResumeHeading
        heading={"Mittuniversitetet, Sundsvall"}
        subHeading={"Media- och kommunikationsvetenskap"}
        duration={"2012-2016"}
      />
      <ResumeHeading
        heading={"Västermalm gymnasium, Sundsvall"}
        subHeading={"Datavetenskap"}
        duration={"2006-2009"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-page-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Ability Hub, Helsingborg"}
          subHeading={"Tjänsteförmedlare"}
          duration={"2020-2020"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Förmedlade företagets tjänster och produkter till nya och nuvarande
            kunder.
          </span>
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Blueberry Språkresor. Helsingborg"}
          subHeading={"Språkrese förmedlare"}
          duration={"2019-2020"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Förmedlare mellan personer som vill studera i Ryssland och Japan och
            skolor.
          </span>
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Hotellet Södra Berget"}
          subHeading={"Receptionist"}
          duration={"2018-2019"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Hanterade bokningar, försäljning och gästernas önskemål.
          </span>
        </div>
      </div>
      {/*   <div className="experience-container">
        <ResumeHeading
          heading={"Hotell One@Tokyo, Tokyo"}
          subHeading={"Front desk agent"}
          duration={"2018-2018"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Hanterade bokningar, försäljning och gästernas önskemål.
          </span>
       
        </div>
      
        </div> */}
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-page-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-page-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          duration={projectsDetails.duration}
          tutorial={projectsDetails.tutorial}
        />
      ))}
    </div>,

    /* Interests */
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
      <ResumeHeading
        heading="Resa"
        description="Finns inte mycket som slår känslan man får när man kommer till en ny plats och upplever något fantastiskt."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../Materials/Resume/${bullet.logoSrc}`).default}
          alt={`${bullet.logoSrc}`}
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumePage = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container page-container " id={props.id || ""}>
      <div className="resume-content">
        <PageHeading title={"Backgrund"} subHeading={"Vad jag har gjort"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumePage()}</div>
        </div>
      </div>
    </div>
  );
}

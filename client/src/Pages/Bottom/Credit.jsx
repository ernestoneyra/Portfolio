import React from "react";
import "./Credit.css";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";



export default function Bottom(props) {
  let fadeInPageHandler = (page) => {
    if (page.fadeInPage !== props.id) return;
    Animations.animations.fadeInPage(props.id);
  };


  const fadeInSubscription =
    ScrollService.currentPageFadeIn.subscribe(fadeInPageHandler);

  return (
    <>
      <div className="bottom-bar bottom-container" id={props.id || ""}>
      <div className="bottom-parent">
     
        <p>Original by Ehizeex 2021. </p>
      </div>
     
      </div>
    </>
  );
}

import React from "react";
import { TOTAL_PAGES } from "../utilities/commonUtils";

export default function Component() {
  const mapAllScreens = () => {
    return TOTAL_PAGES.map((screen) =>
      screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : (
        <div key={screen.screen_name}></div>
      )
    );
  };

  return (
    <>
      <div className="portfolio-container">{mapAllScreens()}</div>
    </>
  );
}

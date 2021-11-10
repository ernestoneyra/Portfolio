import React from "react";
import { TOTAL_PAGES } from "../utilities/commonUtils";

export default function PortfolioContainer() {
  const mapAllPages = () => {
    return TOTAL_PAGES.map((page) =>
      page.component ? (
        <page.component
          pageName={page.page_name}
          key={page.page_name}
          id={page.page_name}
        />
      ) : (
        <div key={page.page_name}></div>
      )
    );
  };

  return (
    <>
      <div className="portfolio-container">{mapAllPages()}</div>
    </>
  );
}

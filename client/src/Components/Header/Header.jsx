import React, { useState } from "react";
import { TOTAL_PAGES, GET_PAGE_INDEX } from "../../utilities/commonUtils";
import ScrollService from "../../utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [selectedPage, setSelectedPage] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentPage = (currentPage) => {
    if (!currentPage || !currentPage.pageInView) return;
    let pageIndex = GET_PAGE_INDEX(currentPage.pageInView);
    if (pageIndex < 0) return;
  };

  let currentPageSubscription =
    ScrollService.currentPageBroadCaster.subscribe(updateCurrentPage);

  const getHeaderOptions = () => {
    return TOTAL_PAGES.map((page, i) => (
      <div
        role="navigation"
        key={page.page_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchPage(i, page)}
      >
        <span>{page.page_name}</span>
      </div>
    ));
  };

  const getHeaderOptionsClass = (index) => {
    let classes = "header-option";
    if (index < TOTAL_PAGES.length - 1) classes += " header-option-seperator";

    if (selectedPage === index) classes += " selected-header-option";
    return classes;
  };

  const switchPage = (index, page) => {
    let pageComponent = document.getElementById(page.page_name);
    if (!pageComponent) return;

    pageComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedPage(index);
    setShowHeaderOptions(false);
  };

  return (
    <div
      className="header-container"
      onClick={() => setShowHeaderOptions(!showHeaderOptions)}
    >
      <div className="header-parent">
        <div
          className="header-hamburger"
          onClick={() => setShowHeaderOptions(!showHeaderOptions)}
        >
          <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
        </div>
        {/* <div className="header-logo">
            <span>Gastrophe</span>
          </div> */}
        <div
          className={
            showHeaderOptions
              ? "header-options show-hamburger-options"
              : "header-options"
          }
        >
          {getHeaderOptions()}
        </div>
      </div>
    </div>
  );
}

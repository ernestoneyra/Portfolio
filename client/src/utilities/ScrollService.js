import { TOTAL_PAGES } from "./commonUtils";
import { Subject } from "rxjs";

export default class ScrollService {
  static scrollHandler = new ScrollService();

  static currentPageBroadCaster = new Subject();
  static currentPageFadeIn = new Subject();

  constructor() {
    window.addEventListener("scroll", this.checkCurrentPageUnderViewport);
  }


  scrollToHireMe = () => {
    let contactMePage = document.getElementById("AboutMe");
    if (!contactMePage) return;

    contactMePage.scrollIntoView({ behavior: "smooth" });
  };


  scrollToHome = () => {
    let homePage = document.getElementById("Home");
    if (!homePage) return;

    homePage.scrollIntoView({ behavior: "smooth" });
  };

  scrollToResume = () => {
    let ResumePage = document.getElementById("Resume");
    if (!ResumePage) return;

    ResumePage.scrollIntoView({ behavior: "smooth" });
  };



  isElementinView = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elemBottom = rec.bottom;

    let partiallyVisible =
      elementTop < window.innerHeight && elemBottom >= 0;
    let completelyVisible =
      elementTop >= 0 && elemBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;
      case "complete":
        return completelyVisible;
      default:
        return false;
    }
  };
  checkCurrentPageUnderViewport = (event) => {
    if (!event || Object.keys(event).length < 1) return;
    for (let page of TOTAL_PAGES) {
      let pageFromDOM = document.getElementById(page.page_name);
      if (!pageFromDOM) continue;

      let fullyVisible = this.isElementinView(pageFromDOM, "complete");
      let partiallyVisible = this.isElementinView(pageFromDOM, "partial");

      if (fullyVisible || partiallyVisible) {
        if (partiallyVisible && !page.alreadyRendered) {
          ScrollService.currentPageFadeIn.next({
            fadeInPage: page.page_name,
          });
          page["alreadyRendered"] = true;
          break;
        }
      }
      if (fullyVisible) {
        ScrollService.currentPageBroadCaster.next({
          pageInView: page.page_name,
        });
        break;
      }
      
    }
  };
}

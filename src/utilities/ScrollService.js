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
    let contactMePage = document.getElementById("Contact_Me");
    if (!contactMePage) return;
    contactMePage.scrollIntoView({ behavior: "smooth" });
  };
  scrollToHome = () => {
    let homePage = document.getElementById("Home");
    if (!homePage) return;
    homePage.scrollIntoView({ behavior: "smooth" });
  };
  isElementinView = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.bottom;

    let partiallyVisible =
      elementTop < window.innerHeight && elementBottom >= 0;
    let completelyVisible =
      elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;
      case "complete":
        return completelyVisible;
      default:
        return false;
    }
  };
}

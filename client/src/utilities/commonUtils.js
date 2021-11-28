import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Resume from "../Pages/Resume/Resume";
import ContactMe from "../Pages/ContactMe/ContactMe";

export const TOTAL_PAGES = [
  {
    page_name: "Home",
    component: Home,
  },
  {
    page_name: "Om mig",
    component: AboutMe,
  },
  {
    page_name: "Backgrund",
    component: Resume,
  },
  {
    page_name: "Kontakta mig",
    component: ContactMe,
  },
];

export const GET_PAGE_INDEX = (page_name) => {
  if (!page_name) return -1;
  for (let i = 0; i < TOTAL_PAGES.length; i++) {
    if (TOTAL_PAGES[i].page_name === page_name) return i;
  }
  return -1;
};

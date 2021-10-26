import Home from "../Pages/Home/Home";

export const TOTAL_PAGES = [
  {
    screen_name: "Home",
    component: Home,
  },
];

export const GET_PAGE_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_PAGES.length; i++) {
    if (TOTAL_PAGES[i].screen_name === screen_name) return i;
  }
  return -1;
};

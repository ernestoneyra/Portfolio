import Home from "../Pages/Home/Home";

export const TOTAL_PAGES = [
  {
    page_name: "Home",
    component: Home,
  },
];

export const GET_PAGE_INDEX = (page_name) => {
  if (!page_name) return -1;
  for (let i = 0; i < TOTAL_PAGES.length; i++) {
    if (TOTAL_PAGES[i].page_name === page_name) return i;
  }
  return -1;
};

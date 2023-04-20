type GlobalState = {
  pages: { path: string; to: string }[];
  currentPage: string;
  direction: string;
};

const pages = [
  {
    path: "/",
    to: "privacy"
  },
  {
    path: "/privacy",
    to: "cutType"
  },
  {
    path: "/cutType",
    to: "/"
  }
];

export const state: GlobalState = {
  pages,
  currentPage: pages[0].path,
  direction: "right"
};

const store = {
  setDirection(direction: string) {
    state.direction = direction;
  }
};

export default store;

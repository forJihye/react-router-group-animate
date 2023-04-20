import { useLocation } from "react-router-dom";
import store, { state } from ".";

// 현재 경로
// 이전 경로
// 현재 경로 기준으로 이전 경로는 right
// 현재 경로 기준으로 다음 경로는 left
const useDirectionHook = () => {
  const location = useLocation();
  const { pages, currentPage } = state;

  store.setPage(location.pathname);
  const prevIndex = pages.findIndex(({ path }) => path === currentPage);
  const index = pages.findIndex(({ path }) => path === location.pathname);
  prevIndex <= index ? store.setDirection("right") : store.setDirection("left");

  return state.direction;
};

export default useDirectionHook;

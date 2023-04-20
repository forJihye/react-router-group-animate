import "./App.css";
import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Routes, useLocation } from "react-router-dom";
import { state } from "./store";
import Page3 from "./pages/Page3";
import Page2 from "./pages/Page2";
import Page1 from "./pages/Page1";

const useDirectionHook = () => {
  const location = useLocation();
  const { pages } = state;
  const [currentPath, setCurrentPath] = useState("/");
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    setCurrentPath(location.pathname);
    const prevIndex = pages.findIndex(({ path }) => path === currentPath);
    const index = pages.findIndex(({ path }) => path === location.pathname);
    prevIndex <= index ? setDirection("right") : setDirection("left");
  }, [location.pathname]);

  return [currentPath, direction];
};

function App() {
  const location = useLocation();
  const [currentPath, direction] = useDirectionHook();
  // 방향 결과
  console.log(currentPath, direction);

  return (
    <TransitionGroup id="wrapper">
      <CSSTransition
        key={location.pathname}
        classNames={direction}
        timeout={500}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page1 />} />
          <Route path="/privacy" element={<Page2 />} />
          <Route path="/cutType" element={<Page3 />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;

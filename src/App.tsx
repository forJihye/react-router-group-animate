import "./App.css";
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Routes, useLocation } from "react-router-dom";
import Page3 from "./pages/Page3";
import Page2 from "./pages/Page2";
import Page1 from "./pages/Page1";
import useDirectionHook from "./store/history";

function App() {
  const location = useLocation();
  const direction = useDirectionHook();

  return (
    <TransitionGroup
      id="wrapper"
      childFactory={(child: any) => {
        return React.cloneElement(child, { classNames: direction });
      }}
    >
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

import React from "react";
import { useLocation } from "react-router-dom";
import Routers from "./router/Routers";
import Cursor from "./components/cursor-animation/cursor";
import ScrollToTop from "./components/ScrollToTop.jsx/ScrollToTop";
import { CursorProvider } from "./components/cursor-animation/CursorContext";

const LazyLoadImages = ({ children }) => {
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === "img") {
      return React.cloneElement(child, {
        loading: "lazy",
      });
    }
    return child;
  });
};

function App() {
  const location = useLocation();

  return (
    <>
      <CursorProvider>
        <Cursor />
        <ScrollToTop />
        <LazyLoadImages>
          <Routers />
        </LazyLoadImages>
      </CursorProvider>
    </>
  );
}

export default App;

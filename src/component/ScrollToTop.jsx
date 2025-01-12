import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  const homeScrollPosition = useRef(0); // Store the scroll position of the home page

  useEffect(() => {
    if (location.pathname === "/") {
      // Restore scroll position for the home page
      window.scrollTo({
        top: homeScrollPosition.current,
        behavior: "smooth",
      });
    } else {
      // Save scroll position if navigating away from the home page
      if (location.state?.from === "/") {
        homeScrollPosition.current = window.scrollY;
      }
      // Scroll to top for all other pages
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  return null;
};

export default ScrollToTop;

"use client";
import "./ScrollToTopButton.scss";
import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className="scrollToTopButton"
      color="primary"
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <div className="scrollToTopButton__round">
        <div className="scrollToTopButton__arrowBox">
          <span className="scrollToTopButton__arrow scrollToTopButton__arrow1">
            {">"}
          </span>
          <span className="scrollToTopButton__arrow scrollToTopButton__arrow2">
            {">"}
          </span>
          <span className="scrollToTopButton__arrow scrollToTopButton__arrow3">
            {">"}
          </span>
        </div>
      </div>
    </button>
  );
}

export default ScrollToTopButton;

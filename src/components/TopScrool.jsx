import React from "react";
import { GrLinkTop } from "react-icons/gr";
export const TopScrool = () => {
  const [backTop, setbackTop] = React.useState(false);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setbackTop(true);
    } else {
      setbackTop(false);
    }
  });
  return (
    <div>
      {backTop ? (
        <button
          onClick={moveToTop}
          className="btn topBtn position-fixed bottom-0 end-0 mb-4 me-4 text-white top"
        >
          <GrLinkTop />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

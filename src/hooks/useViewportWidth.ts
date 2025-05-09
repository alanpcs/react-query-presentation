import { useState, useEffect } from "react";

export const useViewportWidth = (): [boolean, number, number] => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isViewportWideEnoughForExpanded = width > 860;
  return [isViewportWideEnoughForExpanded, width, height];
};

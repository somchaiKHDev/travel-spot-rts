import { useState, useEffect } from "react";

export const useResizeWatcher = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // cleanup เวลา component ถูก unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    windowSize,
  };
};

import { useState, useEffect } from "react";

type Size = {
  width: number;
  height: number;
};

const useWindowSize = ({ width, height }: Size) => {
  const [windowSize, setWindowSize] = useState<Size>({
    width,
    height,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export default useWindowSize;

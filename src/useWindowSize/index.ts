import { useState, useEffect } from "react";

interface Size {
  width: number;
  height: number;
}

export default function useWindowSize(): Size {
  const [size, setSize] = useState<Size>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handler = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handler, false);
    return () => {
      window.removeEventListener("resize", handler, false);
    };
  }, []);

  return size;
}

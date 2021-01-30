import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const updateMedia = () => setWindowSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);

    return () => window.removeEventListener("resize", updateMedia);
  }, [])

  return windowSize;
}

export default useWindowSize;
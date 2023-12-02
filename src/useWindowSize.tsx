import { useEffect, useState } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(
    { height: window.innerHeight, width: window.innerWidth },
  );

  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [window]);

  return windowSize;
};

export default useWindowSize;

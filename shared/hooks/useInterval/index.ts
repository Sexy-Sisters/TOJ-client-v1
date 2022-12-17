import React from "react";

interface IUseInterval {
  (callback: () => void, interval: number): void;
}

export const useInterval: IUseInterval = (callback, interval) => {
  const savedCallback = React.useRef<(() => void) | null>(null);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, []);

  React.useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    let id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [interval]);
};

export default useInterval;

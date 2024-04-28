import { useMemo, useState, useEffect, useLayoutEffect } from 'react';

export const isBrowser = typeof window !== 'undefined';

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

const defaultState = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

function useMeasure() {
  const [element, ref] = useState(null);
  const [rect, setRect] = useState(defaultState);

  const observer = useMemo(
    () =>
      new window.ResizeObserver((entries) => {
        if (entries[0]) {
          const { x, y, width, height, top, left, bottom, right } = entries[0].contentRect;
          setRect({ x, y, width, height, top, left, bottom, right });
        }
      }),
    []
  );

  const observerDisconnect = () => {
    observer.disconnect();
  };

  useIsomorphicLayoutEffect(() => {
    if (!element) return;
    observer.observe(element);
    return observerDisconnect;
  }, [element]);

  return [ref, rect];
}

export default useMeasure;

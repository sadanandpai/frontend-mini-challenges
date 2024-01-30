import React, { useRef, useState } from 'react';
import { capacity, inFlow } from '../config';
import WaterTank from './water-tank';

function TankContainer({ tank, setTanks, index }) {
  const [addedLevel, setAddedWater] = useState(0);
  const intervalRef = useRef(0);
  const waterLevelRef = useRef(0);
  waterLevelRef.current = tank.level;

  function onDown(e) {
    e.preventDefault();

    setTanks((prev) => {
      const next = [...prev];
      next[index].isReady = false;
      return next;
    });

    intervalRef.current = setInterval(() => {
      setAddedWater((prevLevel) => {
        let newLevel = prevLevel + inFlow;

        if (waterLevelRef.current + newLevel >= capacity) {
          newLevel = capacity - waterLevelRef.current;
        }

        return newLevel;
      });
    }, 1000);
  }

  function onUp() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setAddedWater(0);
    setTanks((prev) => {
      const next = [...prev.map((tank) => ({ ...tank }))];
      next[index].level += addedLevel;
      next[index].isReady = true;
      return next;
    });
  }

  function onEmpty() {
    setTanks((prev) => {
      const next = [...prev.map((tank) => ({ ...tank }))];
      next[index].level = 0;
      return next;
    });
  }

  return (
    <WaterTank
      onDown={onDown}
      onUp={onUp}
      onEmpty={onEmpty}
      tankLevel={(waterLevelRef.current + addedLevel)?.toFixed(2)}
      capacity={capacity}
    />
  );
}

export default TankContainer;

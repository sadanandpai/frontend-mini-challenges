import { outFlow } from '../config';

export function getTanksState(size) {
  return Array.from({ length: size }, () => ({ level: 0, isReady: true }));
}

export function getBalancedTanks(tanks) {
  const totalLevel = tanks.filter((t) => t.isReady).reduce((acc, tank) => acc + tank.level, 0);
  const averageLevel = totalLevel / tanks.length;
  const smallerTanks = tanks.filter((tank) => tank.isReady && tank.level < averageLevel);

  // if decimal differences are there
  if (tanks.every((tank) => tank.level - averageLevel < 0.0001)) {
    // can use Number.epsilon as well
    return null;
  }

  // if already balanced
  if (smallerTanks.length === 0) {
    return null;
  }

  // get the total water that can flow out
  let totalOutFlow = 0;
  const newTanks = tanks.map((tank) => {
    const newTank = { ...tank };
    if (tank.isReady && tank.level > averageLevel) {
      const outFlowWater = Math.min(tank.level - averageLevel, outFlow); // if excess water is less than outFlow volume
      newTank.level = tank.level - outFlowWater;
      totalOutFlow += outFlowWater;
    }
    return newTank;
  });

  // get the total water that can flow out and istribute among small tanks
  const waterDistribution = totalOutFlow / smallerTanks.length;
  newTanks.forEach((tank) => {
    if (tank.isReady && tank.level < averageLevel) {
      tank.level += waterDistribution;
    }
  });

  return newTanks;
}

export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

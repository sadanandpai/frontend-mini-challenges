import { createContext, useReducer } from 'react';
import { getMemoryGrid, getEmptyGrid } from './components/util';

const config = {
  rows: 3,
  cols: 3,
  life: 5,
};

const initialState = {
  level: 0,
  isLevelReadyForClick: false,
  rows: config.rows,
  cols: config.cols - 1,
  memoryGrid: [],
  userGrid: [],
  life: config.life,
  activeCount: 0,
  isLevelComplete: true,
  isGameOver: false,
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setCellOnClick': {
      let customState = structuredClone(state);
      if (state.isGameOver) {
        return customState;
      }
      const { payload } = action;

      let { activeCount, isLevelComplete, isLevelReadyForClick, life, isGameOver, userGrid } =
        customState;

      const memoryGridValueAtClickedPosition = state.memoryGrid[payload.rowIndex][payload.colIndex];
      const userGridValueAtClickedPosition = state.userGrid[payload.rowIndex][payload.colIndex];
      if (memoryGridValueAtClickedPosition === 1 && userGridValueAtClickedPosition === 0) {
        userGrid[payload.rowIndex][payload.colIndex] = 1;
        activeCount = activeCount - 1;
        if (activeCount === 0) {
          isLevelComplete = true;
          isLevelReadyForClick = false;
        }
      } else {
        life = life - 1;
      }

      if (life === 0) {
        isGameOver = true;
      }

      return {
        ...customState,
        isLevelComplete,
        isLevelReadyForClick,
        life,
        isGameOver,
        activeCount,
      };
    }
    case 'onNextLevel': {
      let customState = structuredClone(state);

      customState.level = customState.level + 1;
      if (customState.rows === customState.cols) {
        customState.rows = customState.rows + 1;
      } else {
        customState.cols = customState.cols + 1;
      }
      const { grid, activeCount } = getMemoryGrid(customState.rows, customState.cols);
      customState.memoryGrid = grid;
      customState.userGrid = grid;
      customState.activeCount = activeCount;
      customState.isLevelComplete = false;
      return { ...customState };
    }
    case 'setEmptyUserGrid': {
      let customState = structuredClone(state);
      customState.userGrid = getEmptyGrid(customState.rows, customState.cols);

      return customState;
    }
    case 'setLevelReadyForClick': {
      let customState = structuredClone(state);
      const { payload } = action;
      customState.isLevelReadyForClick = payload;
      return customState;
    }
    case 'onReset': {
      return initialState;
    }

    default:
      break;
  }
};

export const GameContext = createContext();

export const GameContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>;
};

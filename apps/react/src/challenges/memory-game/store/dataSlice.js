import { createSlice } from '@reduxjs/toolkit';
import { getMemoryGrid, getEmptyGrid } from '../components/util';
import { config } from './config';

const dataSice = createSlice({
  name: 'data',
  initialState: {
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
  },
  reducers: {
    setCellOnClick: (state, { payload }) => {
      if (state.isGameOver) {
        return;
      }

      const memoryGridValueAtClickedPosition = state.memoryGrid[payload.rowIndex][payload.colIndex];
      const userGridValueAtClickedPosition = state.userGrid[payload.rowIndex][payload.colIndex];

      if (memoryGridValueAtClickedPosition === 1 && userGridValueAtClickedPosition === 0) {
        state.userGrid[payload.rowIndex][payload.colIndex] = 1;
        state.activeCount = state.activeCount - 1;

        if (state.activeCount === 0) {
          state.isLevelComplete = true;
          state.isLevelReadyForClick = false;
        }
      } else {
        state.life = state.life - 1;
      }

      if (state.life === 0) {
        state.isGameOver = true;
      }
    },
    onNextLevel: (state) => {
      state.level = state.level + 1;
      if (state.rows === state.cols) {
        state.rows = state.rows + 1;
      } else {
        state.cols = state.cols + 1;
      }
      const { grid, activeCount } = getMemoryGrid(state.rows, state.cols);
      state.memoryGrid = grid;
      state.userGrid = grid;
      state.activeCount = activeCount;
      state.isLevelComplete = false;
    },
    setEmptyUserGrid: (state) => {
      state.userGrid = getEmptyGrid(state.rows, state.cols);
    },
    setLevelReadyForClick: (state, { payload }) => {
      state.isLevelReadyForClick = payload;
    },
    onReset: (state) => {
      state.level = 0;
      state.isLevelReadyForClick = false;
      state.rows = config.rows;
      state.cols = config.cols - 1;
      state.memoryGrid = [];
      state.userGrid = [];
      state.life = config.life;
      state.activeCount = 0;
      state.isLevelComplete = true;
      state.isGameOver = false;
    },
  },
});

export const setUserGridAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(setEmptyUserGrid());
    dispatch(setLevelReadyForClick(true));
  }, 3000);
};

export const {
  onNextLevel,
  onStart,
  setCellOnClick,
  setEmptyUserGrid,
  setLevelReadyForClick,
  onReset,
} = dataSice.actions;
export default dataSice.reducer;

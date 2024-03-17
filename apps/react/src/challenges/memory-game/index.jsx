import MemoryGameApp from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import dataReducer from './store/dataSlice';

const store = configureStore({
  reducer: dataReducer,
});

const MemoryGame = () => {
  return (
    <Provider store={store}>
      <MemoryGameApp />
    </Provider>
  );
};

export default MemoryGame;

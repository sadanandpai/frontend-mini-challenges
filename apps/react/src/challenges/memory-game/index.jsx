import { useContext } from 'react';
import { GameContext } from './context';
import Home from './components/pages/Home';
import Game from './components/pages/Game';
import { GameContextWrapper } from './context';

function App() {
  const { state } = useContext(GameContext);

  if (state.level === 0) {
    return <Home />;
  } else {
    return <Game />;
  }
}

function MemoryGame() {
  return (
    <GameContextWrapper>
      <App />
    </GameContextWrapper>
  );
}

export default MemoryGame;

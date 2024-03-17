import { useSelector } from 'react-redux';

import Home from './components/pages/Home';
import Game from './components/pages/Game';

function MemoryGameApp() {
  const state = useSelector((state) => state);

  if (state.level === 0) {
    return <Home />;
  } else {
    return <Game />;
  }
}

export default MemoryGameApp;

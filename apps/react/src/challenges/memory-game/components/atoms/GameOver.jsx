import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';

export const GameOverDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 400%;
  font-weight: bold;
  color: red;
`;

const SpringGameOver = animated(GameOverDiv);

const MemoizedGameOver = React.memo(function GameOver({ isGameOver }) {
  const [spring, setSpring] = useSpring(() => ({
    transform: 'translate(-50%, -50%) rotate(-45deg) scale(0)',
    config: config.wobbly,
  }));

  if (isGameOver) {
    setTimeout(
      () => setSpring({ transform: 'translate(-50%, -50%) rotate(-45deg) scale(1)' }),
      800
    );
  }

  return <SpringGameOver style={spring}>Game Over</SpringGameOver>;
});
export default MemoizedGameOver;

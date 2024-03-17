import React from 'react';
import { useTransition, animated } from 'react-spring';
import { ImMan } from 'react-icons/im';
import { FlexRowCenter } from '../styles/common';

const MemoizedLivesManager = React.memo(function LivesManager({ lives }) {
  const livesItems = [];
  for (let i = 0; i < lives; i++) {
    livesItems.push(<ImMan key={i} />);
  }

  const transitions = useTransition(livesItems, (item) => item.key, {
    from: { transform: 'translateX(0px) translateY(0px)', opacity: 1 },
    enter: { transform: 'translateX(0px) translateY(0px)', opacity: 1 },
    leave: { transform: 'translateX(0px) translateY(-40px)', opacity: 0 },
  });

  return (
    <FlexRowCenter style={{ fontSize: '2rem', padding: '10px' }}>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          {item}
        </animated.div>
      ))}
    </FlexRowCenter>
  );
});

export default MemoizedLivesManager;

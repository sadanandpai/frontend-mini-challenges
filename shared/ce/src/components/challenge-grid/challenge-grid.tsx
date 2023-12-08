import { Component, h } from '@stencil/core';

@Component({
  tag: 'challenge-grid',
  styleUrl: 'challenge-grid.css',
  shadow: true,
})
export class ChallengeGrid {
  render() {
    return <div class='challenge-grid'>
      <slot />
    </div>;
  }
}

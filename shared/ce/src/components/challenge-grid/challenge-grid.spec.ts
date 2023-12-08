import { newSpecPage } from '@stencil/core/testing';
import { ChallengeGrid } from './challenge-grid';

describe('challenge-grid', () => {
  it('renders with slot content', async () => {
    const { root } = await newSpecPage({
      components: [ChallengeGrid],
      html: '<challenge-grid><div>1</div><div>2</div><div>3</div><div>4</div></challenge-grid>',
    });
    expect(root).toEqualHtml(`
      <challenge-grid>
        <mock:shadow-root>
          <div class="challenge-grid">
            <slot></slot>
          </div>
        </mock:shadow-root>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </challenge-grid>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { ChallengeCard } from '../challenge-card';

describe('challenge-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ChallengeCard],
      html: `<challenge-card></challenge-card>`,
    });
    expect(page.root).toEqualHtml(`
      <challenge-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </challenge-card>
    `);
  });
});

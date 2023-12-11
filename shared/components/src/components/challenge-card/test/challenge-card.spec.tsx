import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { ChallengeCard } from '../challenge-card';

describe('challenge-card', () => {
  it('renders with props', async () => {
    const challengeProp = {
      title: 'Challenge title',
      link: '/challenge-link',
      difficulty: 'easy' as const,
      developer: { name: 'Developer name', pic: 'https://avatars.githubusercontent.com/u/12962887' },
    };

    const page = await newSpecPage({
      components: [ChallengeCard],
      template: () => <challenge-card challenge={challengeProp} />,
    });

    expect(page.root).toEqualHtml(`
      <challenge-card>
        <mock:shadow-root>
          <a class="challenge-card easy" href="/challenge-link">
            <div>
              <h3>Challenge title</h3>
              <div class="avatar-container">
                <div class="developer">
                  <img alt="" src="https://avatars.githubusercontent.com/u/12962887">
                  <span class="name">Developer name</span>
                </div>
              </div>
            </div>
          </a>
        </mock:shadow-root>
      </challenge-card>
    `);
  });
});

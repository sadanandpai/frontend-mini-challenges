import { newE2EPage } from '@stencil/core/testing';

describe('challenge-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<challenge-card></challenge-card>');

    await page.$eval('challenge-card', (el: any) => {
      const challengeProp = {
        title: 'Challenge title',
        link: '/challenge-link',
        difficulty: 'easy' as const,
        developer: { name: 'Developer name', pic: 'https://avatars.githubusercontent.com/u/12962887' },
      };

      el.challenge = challengeProp
    });

    await page.waitForChanges();

    const element = await page.find('challenge-card');
    expect(element).toHaveClass('hydrated');
  });
});

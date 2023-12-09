import { newE2EPage } from '@stencil/core/testing';

describe('challenge-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<challenge-card></challenge-card>');

    const element = await page.find('challenge-card');
    expect(element).toHaveClass('hydrated');
  });
});

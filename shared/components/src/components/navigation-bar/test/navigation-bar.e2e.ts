import { newE2EPage } from '@stencil/core/testing';

describe('navigation-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<navigation-bar></navigation-bar>');

    const element = await page.find('navigation-bar');
    expect(element).toHaveClass('hydrated');
  });
});

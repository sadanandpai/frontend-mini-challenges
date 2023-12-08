import { newE2EPage } from '@stencil/core/testing';

describe('challenge-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<challenge-grid>Hello</challenge-grid>');
    const element = await page.find('challenge-grid');
    expect(element).toHaveClass('hydrated');
    expect(element.textContent).toBe('Hello');
  });

  it('renders changes to the slot', async () => {
    const page = await newE2EPage();

    await page.setContent('<challenge-grid><div>1</div></challenge-grid>');
    const component = await page.find('challenge-grid');

    expect(component).toEqualHtml(`
      <challenge-grid class="hydrated">
        <mock:shadow-root>
          <div class="challenge-grid">
            <slot></slot>
          </div>
        </mock:shadow-root>
        <div>1</div>
      </challenge-grid>
    `);

    page.$eval('challenge-grid', (el) => {
      const div = document.createElement('div')
      div.innerText = '2'
      el.appendChild(div)
    })

    await page.waitForChanges();

    expect(component).toEqualHtml(`
      <challenge-grid class="hydrated">
        <mock:shadow-root>
          <div class="challenge-grid">
            <slot></slot>
          </div>
        </mock:shadow-root>
        <div>1</div>
        <div>2</div>
      </challenge-grid>
    `);
  });
});

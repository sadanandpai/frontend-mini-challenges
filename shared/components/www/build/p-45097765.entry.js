import { r as n, h as e, g as a } from './p-80b26b42.js';
const i =
  "/* @import '../common/dark-toggle.css'; */\n\n:host {\n  display: block;\n\n  --text-body: #111827;\n\n  --bg-navbar: #f9fafb;\n  --shadow-navbar: rgba(0 0 0 / 0.1);\n  --bg-navbar-logo-img: transparent;\n}\n\n/* Dark override for above variables */\n/* .dark :host {\n  --text-body: #e5e7eb;\n\n  --bg-navbar: #030712;\n  --shadow-navbar: #1f2937;\n  --bg-navbar-logo-img: #d1d5db;\n} */\n\n.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: calc(1rem - var(--logo-size-increment) / 2);\n  margin-bottom: 1rem;\n  background-color: var(--bg-navbar);\n  box-shadow: 0 1px 3px 0 var(--shadow-navbar), 0 1px 2px -1px var(--shadow-navbar);\n  transition: all 150ms ease-in-out;\n\n  --icon-container-size: 26px;\n  --github-svg-size: 26px;\n  --logo-size-increment: 8px;\n\n  & h1 {\n    display: none;\n    margin: 0;\n    color: var(--text-body);\n    font-weight: bold;\n    font-size: 1rem;\n  }\n\n  & .left {\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n\n    & h1 {\n      display: block;\n    }\n\n    & .logo {\n      display: flex;\n      gap: 0.5rem;\n      align-items: center;\n      text-decoration: none;\n\n      & img,\n      & svg {\n        width: calc(var(--icon-container-size) + var(--logo-size-increment));\n        height: calc(var(--icon-container-size) + var(--logo-size-increment));\n      }\n    }\n  }\n\n  & .right {\n    display: flex;\n    gap: 1.5rem;\n\n    & .links {\n      display: none;\n    }\n\n    & .icons {\n      display: flex;\n      gap: 0.5rem;\n      align-items: center;\n\n      & .github {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: var(--icon-container-size);\n        height: var(--icon-container-size);\n        color: var(--text-body);\n\n\n        & > svg {\n          width: var(--github-svg-size);\n          height: var(--github-svg-size);\n        }\n      }\n    }\n  }\n}\n\n@media screen and (width >= 640px) {\n  .navbar {\n    & > h1 {\n      display: block;\n      font-size: 1.6rem;\n    }\n\n    & .left h1 {\n      display: none;\n    }\n  }\n}\n\n@media screen and (width >= 768px) {\n  .navbar {\n    --icon-container-size: 40px;\n    --github-svg-size: 30px;\n    --logo-size-increment: 6px;\n\n    & .right .links {\n      display: flex;\n      gap: 2rem;\n      align-items: center;\n    }\n  }\n}\n";
const t = class {
  constructor(e) {
    n(this, e);
    this.challengeTitle = undefined;
  }
  componentWillLoad() {
    this.hasLeftSlot = !!this.hostElement.querySelector('[slot="left"]');
    this.hasRightSlot = !!this.hostElement.querySelector('[slot="right"]');
  }
  render() {
    return e(
      'nav',
      { class: 'navbar' },
      e(
        'div',
        { class: 'left' },
        this.hasLeftSlot && e('div', null, e('slot', { name: 'left' })),
        e(
          'a',
          { class: 'logo', href: '/frontend-mini-challenges/' },
          e('img', {
            src: 'https://github.com/sadanandpai/frontend-mini-challenges/raw/main/shared/assets/core/logo.png',
            alt: 'logo',
          }),
          e('slot', { name: 'logo' })
        ),
        this.challengeTitle && e('h1', null, this.challengeTitle)
      ),
      this.challengeTitle && e('h1', null, this.challengeTitle),
      e(
        'div',
        { class: 'right' },
        this.hasRightSlot && e('div', { class: 'links' }, e('slot', { name: 'right' })),
        e(
          'div',
          { class: 'icons' },
          e('slot', { name: 'icon' }),
          e(
            'a',
            {
              href: 'https://github.com/sadanandpai/frontend-mini-challenges/',
              target: 'blank',
              class: 'github',
            },
            e(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: '24',
                height: '24',
                viewBox: '0 0 24 24',
              },
              e('path', {
                fill: 'currentColor',
                d: 'M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z',
              })
            )
          )
        )
      )
    );
  }
  get hostElement() {
    return a(this);
  }
};
t.style = i;
export { t as navigation_bar };
//# sourceMappingURL=p-45097765.entry.js.map

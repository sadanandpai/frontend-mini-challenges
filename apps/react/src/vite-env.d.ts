/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'nav-bar': {
      backURL: string;
      homeURL: string;
      sourceCodeLink: string;
      titleText?: string;
      youtubeLink?: string;
    };
  }
}

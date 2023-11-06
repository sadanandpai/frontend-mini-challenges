### Contribution Guide

- Feel free to contribute to this repo by raising the **pull request**
- Spelling mistakes, improvements to answers, code comments, rephrasing of questions, additional details, or similar contributions are highly appreciated.

#### Challenge contribution

- The repo encourages the addition of new challenges that have been developed and modified by you
- __Copy-paste codes from other Repos are not accepted as of now__
- Challenges can be built by referring to the concepts used in other codebases and YouTube but should be developed on your own

#### Standards

- Use modern JavaScript and coding standards
- Write clean and understandable code
- Add comments wherever necessary
- Build it responsively if your app is mobile-compatible
- Try to maintain the challenges in the order of their difficulty

##### Steps to Contribute JavaScript Challenge

- The challenge should be added as a separate folder that should be named with the name of the challenge inside `/native/machine-coding/`
- Challenge should have a minimum of index.html
- Import navbar js file in the head `<script src="../../helpers/header.js" type="module"></script>`
- JavaScript and CSS code if exists should have separate file[s]
- Challenge should be added to the array of challenges `/native/helpers/challenges.js`
- Do not introduce new font or modify the body styles
- Box sizing is taken care and no need to add it

##### Steps to Contribute React Challenge

- The challenge should be added as a separate folder that should be named with the name of the challenge inside `/react/src/machine-coding/`
- Challenge should have a minimum of App.jsx / App.tsx
- The App should be broken down into components, each having its own files.
- CSS should strictly use **module CSS** to prevent pollution in the global space.
- Challenge should be added to the array of challenges `/react/src/helpers/challenges.ts`
- The component should be imported and added to their respective position in the array of challenges in `/react/src/pages/Challenge.tsx`

##### Steps to Contribute VueJs Challenge

- The challenge should be added as a separate folder that should be named with the name of the challenge inside `/vue/src/machine-coding/`
- Challenge folder should have at least one `.vue` file
- The solution should be broken down into components as per requirement
- CSS should be strictly **scoped CSS** to prevent pollution in global space
- The challenge should be added to its respective position in the array of challenges in `/vue/src/helpers/challenges.ts`
- The component should be (statically) imported and added as a separate route in the `/vue/src/routes.ts` file.

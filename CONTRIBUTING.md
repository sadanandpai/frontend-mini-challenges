### Contribution Guide

- Feel free to contribute to this repo by raising the **pull request**
- Spelling mistakes, improvement of answers, code comments, rephrasing the questions, additional details, or similar contributions are highly appreciated

#### Challenge contribution

- Use modern JavaScript and coding standards
- Write clean and understandable code
- Add comments wherever necessary
- Build it responsively if mobile compatible
- Try to maintain the challenges in the order of their difficulty

##### Steps to Contribute JavaScript Challenge

- The challenge should be added as a separate folder that should be named with the name of the challenge inside `/native/machine-coding/`
- Challenge should have a minimum of index.html
- Import navbar js file in the head `<script src="../../helpers/navbar.js" type="module"></script>`
- JavaScript and CSS code if exists should have separate file[s]
- Include standard styles in css at top of CSS file `@import url(../../helpers/core.css);`
- Challenge should be added to the array of challenges `/native/helpers/challenges.js`

##### Steps to Contribute React Challenge

- The challenge should be added as a separate folder that should be named with the name of the challenge inside `/react/src/machine-coding/`
- Challenge should have a minimum of App.jsx / App.tsx
- App should be broken down into components and have their files
- CSS should be strictly **module CSS** to prevent pollution in global space
- Challenge should be added to the array of challenges `/react/src/helpers/challenges.ts`
- The component should be imported and added to their respective position in the array of challenges in `/react/src/pages/challenge/Challenge.tsx`


##### Steps to Contribute VueJs Challenge

- The challenge should be added as a separate folder that should be named with the name of the challenge inside `/vue/src/machine-coding/`
- Challenge folder should have at least one `.vue` file
- The solution should be broken down into components as per requirement
- CSS should be strictly **scoped CSS** to prevent pollution in global space
- Challenge should be added, to its respective position, in the array of challenges `/vue/src/helpers/challenges.ts`
- The component should be (statically) imported and added as a separate route in the `/vue/src/routes.ts` file.

Publishing your very own React Component Library to NPM using Typescript & Storybook

[NPM Public Package](https://docs.npmjs.com/creating-node-js-modules)

# References
 - https://blog.fildon.me/publishing-typescript-react-components-to-npm
 - https://itnext.io/how-to-package-your-react-component-for-distribution-via-npm-d32d4bf71b4f

## Setting up Git Repository
1. Create Git repository.
  - Either create it in GitHub OR just init it locally and push it up to a repo later.


## Building the Component Library
1. Run `npm init -y`
2. Install dependencies `npm install react typescript @types/react --save-dev`
3. Add `react` and `react-dom` to `peerDependencies` in `package.json`.
4. Add `tsconfig.json` and `package.json` configuration.
5. Setup the following directory structure __NOTE: We will add code to the files in the next step.__
    ```
    package.json
    tsconfig.json
    ...
    |- src/
    |   |- Links/
    |   |   |- index.ts
    |   |   |_ NavLink.ts
    |   |- Buttons/
    |   |   |- index.ts
    |   |   |_ ActionButton.ts
    |   |_index.ts
    ```
6. Fill in code files


## Setting up Storybook
<!-- TODO Finish this -->
1. setup storybook `npx storybook init` NOTE this has to happen after react and react-dom have been installed as dependencies
  - (Optional) remove the `.stories` folder created by default. I like my stories next to my components.


## Publishing the NPM Package

1. Setup your NPM user account if you don't already have one.
  - NOTE: public packages and also called unscoped packages
2. Login to npm locally `npm adduser`
3. Increment `version` in `package.json`
3. Compile typescript into javascript `npm run build` __NOTE: Make sure npm build is added in the building of the component library.__
4. Copy `package.json` and `README.md` to the `./dist` folder.
  ```bash
  cp package.json README.md ./dist
  ```
5. run `npm publish ./dist` in your project directory (You may need to type your PW and OTP if 2fa is setup)

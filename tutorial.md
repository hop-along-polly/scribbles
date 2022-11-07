Publishing your very own React Component Library to NPM using Typescript & Storybook

[NPM Public Package](https://docs.npmjs.com/creating-node-js-modules)

## Publishing the NPM Package

1. Setup your NPM user account if you don't already have one.
  - NOTE: public packages and also called unscoped packages
2. Login to npm locally `npm adduser`
3. run `npm publish` in your project directory (You may need to type your PW and OTP if 2fa is setup)

## Setting up Git Repository
1. Create Git repository.
  - Either create it in GitHub OR just init it locally and push it up to a repo later.

## Building the Component Library
1. Run `npm init -y`
2. install dependencies `npm install react typescript @types/react --save-dev`
3. setup storybook `npx storybook init` NOTE this has to happen after react and react-dom have been installed as dependencies
  - (Optional) remove the `.stories` folder created by default. I like my stories next to my components.
4. 
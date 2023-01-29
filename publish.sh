#! /bin/bash

echo "Publishing Scribbles to NPM"

# Clean dist folder so a clean distribution is published
echo "Cleaning dist folder" && rm -rf dist && echo "done"

# Build artifacts
npm run build && cp package.json README.md ./dist

# publish artifacts in dist folder
npm publish ./dist

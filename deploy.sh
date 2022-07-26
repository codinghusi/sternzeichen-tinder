#!/bin/sh
npm run build
git add dist
git commit -am "new gh-pages build"
git subtree push --prefix dist origin gh-pages

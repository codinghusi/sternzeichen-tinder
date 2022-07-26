#!/bin/sh
echo "BUILDING..."
npm run build
echo "PUSHING..."
git add dist
git commit -am "new gh-pages build"
git subtree push --prefix dist origin gh-pages
git push
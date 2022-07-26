@echo off
echo "BUILDING..."
call npm run build
echo "PUSHING..."
call git add dist
call git commit -am "new gh-pages build"
call git subtree push --prefix dist origin gh-pages
call git push
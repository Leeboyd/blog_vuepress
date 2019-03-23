#!/bin/sh

# abort on errors
set -e

# build
docker exec -it blog sh -c "yarn blog:build"

# navigate into the build output directory
cd blog/.vuepress/dist

git init
git remote add origin git@github.com-LeeBoyd:Leeboyd/blog_vuepress.git -t gh-pages
git checkout -b gh-pages
git add -A
git commit -m "blog updated: $(date +"%D %T")"
git push -f origin gh-pages

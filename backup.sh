#!/bin/sh

# abort on errors
set -e

git add -A
git commit -m "blog updated: $(date +"%D %T")"
git push -f origin master

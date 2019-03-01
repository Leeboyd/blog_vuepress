#!/bin/sh

# abort on errors
set -e

git add -A
git commit -m "config updated: $(date +"%D %T")"
git push -f origin master

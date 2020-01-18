#!/usr/bin/env sh

set -e

npm run build

cd public/

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:dylandaviddavies/tamsin.io.git master:gh-pages

cd -
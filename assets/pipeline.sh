#!/bin/bash
# Run and build the code
npm install
npm run build
# Commit code
git add .
git commit -m "Task 1 - inital code and run - completed"
git push origin master
git status
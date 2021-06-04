#!/bin/bash
# Run and build the code
npm install
npm run build
if [ $? -eq 0 ]
then
  echo "SUCCESS BUILD"
else
  echo "FAIL"
  exit 2
fi
# Commit code
git add .
git commit -m "Task 1 - inital code and run - completed"
git push origin master
git status
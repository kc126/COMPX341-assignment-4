#!/bin/bash
# Checks that the code has the correct documentation
if [ $(python documentationCheck.py) = 0 ]; then
  echo "Files do not have the correct documentation"
  exit 2
fi
echo "Files have the correct documentation"
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
# Testing
npm run test || exit $?
# Commit code
git add .
git commit -m "Task 2 - part 2 completed and tested - uncommented code"
git push origin master
git status
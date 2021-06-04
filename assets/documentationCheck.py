import os
import sys

for subdir, dirs, files in os.walk("./src"):
  for file in files:
    filepath = subdir + os.sep + file
    if filepath.endswith(".ts") or filepath.endswith(".tsx"):
      f = open(filepath, 'r')
      lines = f.readlines()
      f.close()
      if not (lines[0] == "// Name: Kyle Cree\n" and lines[1] == "// Id: 1505970\n"):
        print('0')
        sys.exit(0)

print('1')
sys.exit(0)
#!/bin/bash

gulp sprites
gulp json
node ./scripts/json-overwrite.js
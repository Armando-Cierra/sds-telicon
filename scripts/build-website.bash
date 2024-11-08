#!/bin/bash
rm -rf ./dist
cd ./website
yarn
rm -rf .parcel-cache
rm -rf dist
yarn parcel build ./public/index.html --no-source-maps --public-url ./
mv ./dist ../
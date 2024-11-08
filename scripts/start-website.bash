#!/bin/bash

cd ./website
yarn
rm -rf .parcel-cache
rm -rf dist
yarn parcel ./public/index.html
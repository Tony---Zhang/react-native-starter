#!/usr/bin/env bash

rm -rf node_modules
rm package-lock.json
rm yarn.lock
yarn install
yarn lint

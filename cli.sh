#!/usr/bin/env bash

NODE_BIN=node_modules/.bin

function echo-start() {
  echo "START: $@"
}

function echo-end() {
  echo "END: $@"
}

function dev() {
  lint
  echo-start 'dev'

  $NODE_BIN/babel \
    src/index.js \
    --watch \
    --out-file index.js
}

function coverage() {
  lint
  echo-start 'coverage'

  $NODE_BIN/nyc report $NODE_BIN/ava ./src/test \

  echo-end 'coverage'
}

function build() {
  lint
  echo-start 'build'

  $NODE_BIN/babel \
    src/index.js \
    --out-file index.js

  echo-end 'build'
}

function test() {
  echo-start 'tests'

  $NODE_BIN/ava \
    ./src/test \
    --watch \
    --verbose

  echo-end 'tests'
}

function lint() {
  echo-start 'eslint'

  $NODE_BIN/eslint \
    ./src/

  echo-end 'eslint'
}

function lint-fix() {
  echo-start 'lint-fix'

  $NODE_BIN/eslint \
    --fix \
    ./src/

  echo-end 'lint-fix'
}

function clean() {
  echo-start 'clean'

  rm -rf \
    ./index.js \
    ./index.js.map \
    ./test

  echo-end 'clean'
}

function help() {
  echo "
make [task]

running make without task starts a dev env

dev      - start dev env
build    - build library
clean    - remove build library and test files
lint     - eslint javascript sources
lint-fix - eslint and fix javascript sources
test     - run tests
coverage - generate coverage data
"
}

if [ $1 ]
then
  function=$1
  shift
  $function $@
else
  help $@
fi

# hello-world

I'm an Earthling!

Baylien here, I want to become a well versed well rounded web developer.
I got a lot of ideas I want to have fun creating and sending out into the atmosphere!

## Install

- Run `yarn`

## Testing

- Run `yarn test`

## Linting

- Run `yarn lint`

## Starting Dev Server

- Run `yarn dev`

## Starting App

- Run `yarn start`

## Goal - Create an app with for Web/iOS/Android


OR

```
    "start": "node build/bundle.js",
    "build:prod": "rm -rf build && rm -rf public && webpack  --config webpack.server.js && webpack -p --config webpack.client.prod.js --mode production",
    "heroku-postbuild": "npm install && npm run build:prod",
    "webpack-prod": "webpack -p --progress --config webpack.client.prod.js --mode production",
    "dev": "npm run build-server && npm-run-all --parallel dev:*",
    "build-server": "webpack --config webpack.server.js",
    "dev:build-server": "webpack --config webpack.server.js --watch",
    "dev:build-client": "webpack --config webpack.client.js --watch",
    "dev:server": "nodemon --watch build --exec \"node build/bundle.js\"",
    "precommit": "pretty-quick --staged"
```
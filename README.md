# Reactor (react native test project)

React test project. This is a simple project for trying out react native development.

This was written using node v18.20.5 and npm. To run, try the following:

```
npm start
```

## Setup

```
npm i
```

## Build Steps

### Android

```
# Update build version
npx eas build:version:set
npx eas build -p android

# Then go to https://play.google.com/console/u/0/developers
```

## Node version

This project expects to be run with node `20.19.4`.

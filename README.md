# Reactor (react native test project)
React test project. This is a simple project for trying out react native development.

This was written using node v14.20.1 and npm. To run, try the following:


```
cd reactor
npm start
```

## Build Steps
### Android

``` 
# Update build version
npx eas build:version:set
npx eas build -p android

# Then go to https://play.google.com/console/u/0/developers
```
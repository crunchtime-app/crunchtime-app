# CrunchTime Services

## Intro

This repository contains the application code for CrunchTime.

## Technology

This application is built with React Native and the Expo toolkit for React Native.


## Developer's Guide

### Prerequisites

You will need `Nodejs` and `npm` installed locally. The versions used to develop are: 

* Nodejs - v10.16.0
* npm - 6.14.4 

To install all local dependencies, run `npm install` after pulling down the code. 

### Running the application

```
npm start
```

This script will create a local Expo webserver, which can be accessed at https://localhost:10092/

From the Expo portal page at https://localhost:10092/ you can run the application a few different ways:

#### Physical iOS device - Preferred method

1. Install the `Expo` application.
2. Use your phone's camera app to scan the QR Code on the Expo start page.
3. The app should then start locally, within the Expo app.

#### Physical Android device

Running local version:
1. Install the `Expo` application.
2. Use the Expo app to scan the QR code on the Expo start page.
3. The app should then start locally, within the Expo app.

Running published version:
1. Install the `Expo` application.
2. Use the Expo app to scan the QR code on the following page: https://expo.io/@twistedspoon/crunchtime-app. This the published version of the app.
3. The app should then start locally, within the Expo app.
4. You can also try simply  visiting https://expo.io/@twistedspoon/crunchtime-app on a phone with Expo installed.


Note: This application was built and tested using mainly the iOS and Web versions of the build. Some users have reported buggy behavior with the Android version. For best performance at this time, the iOS version is recommended.

#### Web

1. Simply start the local Expo webserver
2. Press the link on the left to start the application in a web browser
3. The app will open in a new tab at https://localhost:10096/

Note: The date-picker component used on the Create Test modal is designed only for mobile experiences, and will default to the current day when using the application on web.


#### Device simulators

1. Using the Expo webserver, there are options to launch the app using iOS and Android simulators. Note that these options have not been tested, but may prove to be more reliable if a physical device is not available. 
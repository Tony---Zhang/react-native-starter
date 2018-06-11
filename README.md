## React Native Starter  [![Build Status](https://travis-ci.org/hanpanpan200/react-native-starter.svg?branch=master)](https://travis-ci.org/hanpanpan200/react-native-starter)
React Native Starter is a React Native boilerplate app to get you up and running quickly.


### Setup React Native

Please follow React Native [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to finish the setup.

In the `Building Projects with Native Code` section, please make sure you have setup your `Android` and `iOS` environment.

### Stack

[React Native](https://facebook.github.io/react-native/) for build native Apps

[Redux](https://github.com/reactjs/redux) a predictable state container for Javascript apps

[axios](https://github.com/mzabriskie/axios) a promise based HTTP client for the browser and node.js

[prop-types](https://github.com/facebook/prop-types) Runtime type checking for React props and similar objects

[react-native-router-flux](https://github.com/aksonov/react-native-router-flux) navigation for React Native

[redux-thunk](https://github.com/gaearon/redux-thunk) Thunk middleware for Redux

[redux-logger](https://github.com/evgenyrodionov/redux-logger) Logger for Redux

### How to run

Please use [yarn](https://yarnpkg.com/en/) to install the npm dependencies.

```
yarn install
```

Then you can run iOS:
```
react-native run-ios
```

Or run Android:
```
react-native run-android
```

### Available scripts

For test:

```
yarn test
```

For eslint:

```
yarn lint
```

### How to reuse

You've cloned the project and you're wanting to make it your own. But..."ReactNativeStarter".

With [react-native-rename](https://www.npmjs.com/package/react-native-rename), React Native Rename will replace all files, directories and references of `ReactNativeStarter` to what ever you'd like.

#### Install the package
```
yarn global add react-native-rename

```
#### Rename the App
```
react-native-rename NewAppName
```

#### Change ApiHost

Please change your API HOST in `./src/config/apiConfig`

For example, change:

```JavaScript
const API_HOST = ''

export default API_HOST

```
To:

```
const API_HOST = 'https://yourhost'

export default API_HOST

```

### Reference
[《從0到100打造一個React Native boilerplate》](https://noootown.gitbooks.io/deeperience-react-native-boilerplate/content/Introduction/React%20Native%20&%20Boilerplate.html)

Then you can build your own App on the basis of ReactNativeStarter! 🙌🏻

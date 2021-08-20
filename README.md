# [Native Positioning](https://github.com/native-ly/native-positioning)

[![NPM version](https://flat.badgen.net/npm/v/native-positioning)](https://www.npmjs.com/package/native-positioning)
[![NPM downloads](https://flat.badgen.net/npm/dm/native-positioning)](https://www.npmjs.com/package/native-positioning)
[![NPM license](https://flat.badgen.net/npm/license/native-positioning)](https://www.npmjs.com/package/native-positioning)
[![run in expo snack](https://img.shields.io/badge/Run%20in%20Snack-4630EB?style=flat-square&logo=EXPO&labelColor=FFF&logoColor=000)](https://snack.expo.io/@jbiesiada/native-positioning)
[![Codecov](https://flat.badgen.net/codecov/c/github/native-ly/native-positioning)](https://codecov.io/gh/native-ly/native-positioning)
[![Travis](https://flat.badgen.net/travis/native-ly/native-positioning)](https://app.travis-ci.com/github/native-ly/native-positioning)
[![Bundle size](https://flat.badgen.net/packagephobia/install/native-positioning)](https://packagephobia.com/result?p=native-positioning)

## About

Set the positioning of the React Native component in one line of code

## How to Install

First, install the library in your project by npm:

```sh
$ npm install native-positioning
```

Or Yarn:

```sh
$ yarn add native-positioning
```

## Getting Started

**Connect the library with the project using ES6 import:**

```js
import { positioning } from 'native-positioning'
```

## Options

You can use the functions with the following combinations:

- `(all)`
- `(vertical, horizontal)`
- `(top, horizontal, bottom)`
- `(top, right, bottom, left)`

All params are `number` or `string` type

## Example

```jsx
import React from 'react'
import { View } from 'react-native'
import { positioning } from 'native-positioning'

const App = () => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        ...positioning(0, 20, 15),
        // top: 0,
        // right: 20,
        // bottom: 15,
        // left: 20,
      }}
    />
  )
}

export default App
```

## License

This project is licensed under the MIT License © 2021-present Jakub Biesiada

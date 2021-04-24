# [Native Positioning](https://github.com/native-ly/native-positioning)

[![NPM version](https://img.shields.io/npm/v/native-positioning?style=flat-square)](https://www.npmjs.com/package/native-positioning)
[![NPM downloads](https://img.shields.io/npm/dm/native-positioning?style=flat-square)](https://www.npmjs.com/package/native-positioning)
[![NPM license](https://img.shields.io/npm/l/native-positioning?style=flat-square)](https://www.npmjs.com/package/native-positioning)
[![run in expo snack](https://img.shields.io/badge/Run%20in%20Snack-4630EB?style=flat-square&logo=EXPO&labelColor=FFF&logoColor=000)](https://snack.expo.io/@jbiesiada/native-positioning)
[![Codecov](https://img.shields.io/codecov/c/github/native-ly/native-positioning?style=flat-square)](https://codecov.io/gh/native-ly/native-positioning)
[![Travis](https://img.shields.io/travis/native-ly/native-positioning/master?style=flat-square)](https://travis-ci.org/native-ly/native-positioning)

## About

Set positioning for React Native component in one line of code

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

**• Connect libary with project using ES6 import:**

```js
import { positioning } from 'native-positioning'
```

## Options

You can use functions with next combinations:

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
```

## License

This project is licensed under the MIT License © 2021-present Jakub Biesiada

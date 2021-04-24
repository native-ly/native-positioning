import { FlexStyle } from 'react-native'

export type SingleSize = number | string

export type Size =
  | [all: SingleSize]
  | [vertical: SingleSize, horizontal: SingleSize]
  | [top: SingleSize, horizontal: SingleSize, bottom: SingleSize]
  | [top: SingleSize, right: SingleSize, bottom: SingleSize, left: SingleSize]

export const positioning = (...params: Size): FlexStyle => {
  switch (params.length) {
    case 1: {
      const all = params[0]

      return {
        top: all,
        right: all,
        bottom: all,
        left: all,
      }
    }

    case 2: {
      const vertical = params[0]
      const horizontal = params[1]

      return {
        top: vertical,
        right: horizontal,
        bottom: vertical,
        left: horizontal,
      }
    }

    case 3: {
      const horizontal = params[1]

      return {
        top: params[0],
        right: horizontal,
        bottom: params[2],
        left: horizontal,
      }
    }

    case 4: {
      return {
        top: params[0],
        right: params[1],
        bottom: params[2],
        left: params[3],
      }
    }

    default: {
      throw new Error('Unsupported position value')
    }
  }
}

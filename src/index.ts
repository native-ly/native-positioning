import { FlexStyle } from 'react-native'

export type SingleSize = number | string

export type Size =
  | [all: SingleSize]
  | [vertical: SingleSize, horizontal: SingleSize]
  | [top: SingleSize, horizontal: SingleSize, bottom: SingleSize]
  | [top: SingleSize, right: SingleSize, bottom: SingleSize, left: SingleSize]

export const positioning = (...size: Size): FlexStyle => {
  switch (size.length) {
    case 1: {
      const [all] = size

      return {
        top: all,
        right: all,
        bottom: all,
        left: all,
      }
    }

    case 2: {
      const [vertical, horizontal] = size

      return {
        top: vertical,
        right: horizontal,
        bottom: vertical,
        left: horizontal,
      }
    }

    case 3: {
      const [top, horizontal, bottom] = size

      return {
        top,
        right: horizontal,
        bottom,
        left: horizontal,
      }
    }

    case 4: {
      const [top, right, bottom, left] = size

      return { top, right, bottom, left }
    }

    default:
      throw new Error('Unsupported position value')
  }
}

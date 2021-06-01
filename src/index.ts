import { FlexStyle } from 'react-native'

export type SingleSize = number | string

export type Size =
  | [all: SingleSize]
  | [vertical: SingleSize, horizontal: SingleSize]
  | [top: SingleSize, horizontal: SingleSize, bottom: SingleSize]
  | [top: SingleSize, right: SingleSize, bottom: SingleSize, left: SingleSize]

export const positioning = (...params: Size): FlexStyle => {
  const unsupportedValues = [null, undefined, NaN, false, true, ''] as any

  switch (params.length) {
    case 1: {
      const all = params[0]

      if (unsupportedValues.includes(all)) {
        return {}
      }

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

      let sizes = {} as FlexStyle

      if (!unsupportedValues.includes(vertical)) {
        sizes = { ...sizes, top: vertical, bottom: vertical }
      }

      if (!unsupportedValues.includes(horizontal)) {
        sizes = { ...sizes, right: horizontal, left: horizontal }
      }

      return sizes
    }

    case 3: {
      const horizontal = params[1]

      let sizes = {} as FlexStyle

      if (!unsupportedValues.includes(params[0])) {
        sizes = { ...sizes, top: params[0] }
      }

      if (!unsupportedValues.includes(horizontal)) {
        sizes = { ...sizes, right: horizontal, left: horizontal }
      }

      if (!unsupportedValues.includes(params[2])) {
        sizes = { ...sizes, bottom: params[2] }
      }

      return sizes
    }

    case 4: {
      let sizes = {} as FlexStyle

      if (!unsupportedValues.includes(params[0])) {
        sizes = { ...sizes, top: params[0] }
      }

      if (!unsupportedValues.includes(params[1])) {
        sizes = { ...sizes, right: params[1] }
      }

      if (!unsupportedValues.includes(params[2])) {
        sizes = { ...sizes, bottom: params[2] }
      }

      if (!unsupportedValues.includes(params[3])) {
        sizes = { ...sizes, left: params[3] }
      }

      return sizes
    }

    default:
      throw new Error('Unsupported position value')
  }
}

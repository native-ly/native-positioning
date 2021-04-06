export type SingleSize = number | string

export type Size =
  | [all: SingleSize]
  | [vertical: SingleSize, horizontal: SingleSize]
  | [top: SingleSize, horizontal: SingleSize, bottom: SingleSize]
  | [top: SingleSize, right: SingleSize, bottom: SingleSize, left: SingleSize]

const typeSafeSize = (size: SingleSize) => {
  if (typeof size === 'string') {
    return parseFloat(size)
  }

  return size
}

export function positioning(...params: Size) {
  switch (params.length) {
    case 1: {
      const all = typeSafeSize(params[0])

      return {
        top: all,
        right: all,
        bottom: all,
        left: all,
      }
    }

    case 2: {
      const vertical = typeSafeSize(params[0])
      const horizontal = typeSafeSize(params[1])

      return {
        top: vertical,
        right: horizontal,
        bottom: vertical,
        left: horizontal,
      }
    }

    case 3: {
      const horizontal = typeSafeSize(params[1])

      return {
        top: typeSafeSize(params[0]),
        right: horizontal,
        bottom: typeSafeSize(params[2]),
        left: horizontal,
      }
    }

    case 4: {
      return {
        top: typeSafeSize(params[0]),
        right: typeSafeSize(params[1]),
        bottom: typeSafeSize(params[2]),
        left: typeSafeSize(params[3]),
      }
    }

    default: {
      throw new Error('Unsupported position value')
    }
  }
}

// positioning(5, 5)
// positioning(5, 5, 4)
// positioning(1, 5, 5, 4)

// positioning({
//   horizontal: 5,
//   vertical: 4,
// })

// positioning({
//   left: 5,
//   right: 4,
//   top: 3,
//   bottom: 4,
// })

import type { FlexStyle } from 'react-native'

import { positioning, Size } from '../src'

interface TestCase {
  readonly size: Size
  readonly style: FlexStyle
}

const testCases: TestCase[] = [
  {
    size: [20],
    style: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    },
  },
  {
    size: ['102'],
    style: {
      top: '102',
      right: '102',
      bottom: '102',
      left: '102',
    },
  },
  {
    size: [15, 20],
    style: {
      top: 15,
      right: 20,
      bottom: 15,
      left: 20,
    },
  },
  {
    size: ['0', '12'],
    style: {
      top: '0',
      right: '12',
      bottom: '0',
      left: '12',
    },
  },
  {
    size: [16, 33, 24],
    style: {
      top: 16,
      right: 33,
      bottom: 24,
      left: 33,
    },
  },
  {
    size: [2, 1, 3, 7],
    style: {
      top: 2,
      right: 1,
      bottom: 3,
      left: 7,
    },
  },
  {
    size: ['3', '3', '3', '2'],
    style: {
      top: '3',
      right: '3',
      bottom: '3',
      left: '2',
    },
  },
  {
    size: [-1, '000000002', 1_000, 0x1234],
    style: {
      top: -1,
      right: '000000002',
      bottom: 1000,
      left: 4660,
    },
  },
]

describe('positioning', () => {
  it.each(testCases)(
    'should create positioning for $params',
    ({ size, style }) => {
      expect(positioning(...size)).toEqual(style)
    }
  )

  it('should throw an error for not supported params', () => {
    try {
      positioning(...([40, 30, 20, 10, 0] as any))
    } catch (err) {
      expect(err.message).toBe('Unsupported position value')
    }
  })
})

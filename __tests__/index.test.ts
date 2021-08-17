import type { FlexStyle } from 'react-native'

import { positioning, Size } from '../src'

interface TestCase {
  readonly params: Size
  readonly expected: FlexStyle
}

const testCases: TestCase[] = [
  {
    params: [20],
    expected: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    },
  },
  {
    params: ['102'],
    expected: {
      top: '102',
      right: '102',
      bottom: '102',
      left: '102',
    },
  },
  {
    params: [15, 20],
    expected: {
      top: 15,
      right: 20,
      bottom: 15,
      left: 20,
    },
  },
  {
    params: ['0', '12'],
    expected: {
      top: '0',
      right: '12',
      bottom: '0',
      left: '12',
    },
  },
  {
    params: [16, 33, 24],
    expected: {
      top: 16,
      right: 33,
      bottom: 24,
      left: 33,
    },
  },
  {
    params: [2, 1, 3, 7],
    expected: {
      top: 2,
      right: 1,
      bottom: 3,
      left: 7,
    },
  },
  {
    params: ['3', '3', '3', '2'],
    expected: {
      top: '3',
      right: '3',
      bottom: '3',
      left: '2',
    },
  },
  {
    params: [-1, '000000002', 1_000, 0x1234],
    expected: {
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
    ({ params, expected }) => {
      expect(positioning(...params)).toEqual(expected)
    }
  )

  it('should throw an error for not supported params', () => {
    try {
      positioning(...([40, 30, 20, 10, 0] as any))
    } catch (e) {
      expect(e.message).toBe('Unsupported position value')
    }
  })
})

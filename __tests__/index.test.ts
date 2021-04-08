import type { FlexStyle } from 'react-native'
import { positioning, Size } from '../src'

describe('positioning', () => {
  it.each([
    [
      [20],
      {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      },
    ],
    [
      ['102'],
      {
        top: 102,
        right: 102,
        bottom: 102,
        left: 102,
      },
    ],
    [
      [15, 20],
      {
        top: 15,
        right: 20,
        bottom: 15,
        left: 20,
      },
    ],
    [
      ['0', '12'],
      {
        top: 0,
        right: 12,
        bottom: 0,
        left: 12,
      },
    ],
    [
      [16, 33, 24],
      {
        top: 16,
        right: 33,
        bottom: 24,
        left: 33,
      },
    ],
    [
      ['0', '12'],
      {
        top: 0,
        right: 12,
        bottom: 0,
        left: 12,
      },
    ],
    [
      [2, 1, 3, 7],
      {
        top: 2,
        right: 1,
        bottom: 3,
        left: 7,
      },
    ],
    [
      ['3', '3', '3', '2'],
      {
        top: 3,
        right: 3,
        bottom: 3,
        left: 2,
      },
    ],
    [
      [NaN, 'lorem ipsum', null, undefined],
      {
        top: NaN,
        right: 3,
        bottom: 3,
        left: 2,
      },
    ],
    [
      [-1, '000000002', 1_000, 0x1234],
      {
        top: NaN,
        right: 3,
        bottom: 3,
        left: 2,
      },
    ],
    [
      [
        '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
      ],
      {
        top: NaN,
        right: 3,
        bottom: 3,
        left: 2,
      },
    ],
    [
      ['20px', '50%'],
      {
        top: NaN,
        right: 3,
        bottom: 3,
        left: 2,
      },
    ],
    // TODO
    // [
    //   [],
    //   {
    //     top: NaN,
    //     right: 3,
    //     bottom: 3,
    //     left: 2,
    //   },
    // ],
    // TODO
    // [
    //   [40, 30, 20, 10, 0],
    //   {
    //     top: 2,
    //     right: 1,
    //     bottom: 3,
    //     left: 7,
    //   },
    // ],
    // TODO test bigint
    // TODO update type
  ] as [Size, FlexStyle][])('should create positioning', (params, expected) => {
    expect(positioning(...params)).toEqual(expected)
  })

  it('should throw error for not supported params', () => {
    try {
      positioning(...([40, 30, 20, 10, 0] as any))
    } catch (e) {
      expect(e.message).toBe('Unsupported position value')
    }
  })
})

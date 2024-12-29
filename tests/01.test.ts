import { prepareGifts } from '../src/01';

test('test #1', () => {
  const gifts1 = [3, 1, 2, 3, 4, 2, 5]
  expect(prepareGifts(gifts1)).toEqual([1, 2, 3, 4, 5])
})

test('test #2', () => {
  const gifts2 = [3, 3, 3, 3, 3, 3, 3]
  expect(prepareGifts(gifts2)).toEqual([3])
})

test('test #3', () => {
  const gifts3 = [6, 5, 5, 5, 5]
  expect(prepareGifts(gifts3)).toEqual([5, 6])
})

test('test #4', () => {
  const gifts4 = []
  expect(prepareGifts(gifts4)).toEqual([])
})

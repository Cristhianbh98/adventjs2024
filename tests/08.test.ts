import { drawRace } from '../src/08'

test('test #1', () => {
  const result = "  ~~~~~~~~~~ /1\n ~~~~~r~~~~ /2\n~~~~~~~r~~ /3"

  expect(drawRace([0, 5, -3], 10)).toBe(result)
})

test('test #2', () => {
  const result = "   ~~r~~~~~ /1\n  ~~~~~~~r /2\n ~~~~~~~~ /3\n~~~~~r~~ /4"

  expect(drawRace([2, -1, 0, 5], 8)).toBe(result)
})

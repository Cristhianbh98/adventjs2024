import { inBox } from '../src/06'

test('test #1', () => {
  expect(inBox([
    '*****',
    '*   *',
    '*   *',
    '*   *',
    '*****'
  ])).toBe(false)

  expect(inBox([
    "###",
    "#*#",
    "###"
  ])).toBe(true)

  expect(inBox([
    "####",
    "#* #",
    "#  #",
    "####"
  ])).toBe(true)

  expect(inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
  ])).toBe(false)

  expect(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
  ])).toBe(false)
})

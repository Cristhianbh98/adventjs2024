import { moveTrain } from '../src/09'

test('test #1', () => {
  const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
  ]

  expect(moveTrain(board, 'U')).toBe('eat')
})

test('test #2', () => {
  const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
  ]

  expect(moveTrain(board, 'D')).toBe('crash')
})

test('test #3', () => {
  const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
  ]

  expect(moveTrain(board, 'L')).toBe('crash')
})

test('test #4', () => {
  const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
  ]

  expect(moveTrain(board, 'R')).toBe('none')
})

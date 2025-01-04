import { organizeShoes, Shoe } from '../src/05'

test('test #1', () => {
  const shoes: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]

  expect(organizeShoes(shoes)).toEqual([38, 42])
})

test('test #2', () => {
  const shoes: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
  ]

  expect(organizeShoes(shoes)).toEqual([38, 38])
})

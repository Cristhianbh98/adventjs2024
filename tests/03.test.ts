import { organizeInventory } from '../src/03'

test('test #1', () => {
  const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
  ]
  
  const expected = {
    toys: {
      doll: 5,
      car: 5
    },
    sports: {
      ball: 2,
      racket: 4
    }
  }

  expect(organizeInventory(inventory)).toEqual(expected)
})

test('test #2', () => {
  const inventory = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
  ]

  const expected = {
    education: {
      book: 15
    },
    art: {
      paint: 3
    }
  }

  expect(organizeInventory(inventory)).toEqual(expected)
})

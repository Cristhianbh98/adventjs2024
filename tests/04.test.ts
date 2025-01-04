import { createXmasTree } from '../src/04'

test('test #1', () => {	
  const tree = "__*__\n_***_\n*****\n__#__\n__#__"

  expect(createXmasTree(3, '*')).toEqual(tree)
})

test('test #2', () => {
  const tree = "____+____\n___+++___\n__+++++__\n_+++++++_\n+++++++++\n____#____\n____#____"

  expect(createXmasTree(5, '+')).toEqual(tree)
})

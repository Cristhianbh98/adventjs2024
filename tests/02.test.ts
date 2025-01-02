import { createFrame } from '../src/02'

test('test #1', () => {
  expect(createFrame(['midu'])).toEqual('********\n* midu *\n********')
})
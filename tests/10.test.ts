import { compile } from '../src/10'

test('test #1', () => {
  const instructions = [
    'MOV -1 C', // copies -1 to register 'C',
    'INC C', // increments the value of register 'C'
    'JMP C 1', // jumps to the instruction at index 1 if 'C' is 0
    'MOV C A', // copies register 'C' to register 'A',
    'INC A' // increments the value of register 'A'
  ]

  expect(compile(instructions)).toBe(2)
})

test('test #2', () => {
  const instructions =[
    "MOV 0 A",
    "INC A"
  ]

  expect(compile(instructions)).toBe(1)
})

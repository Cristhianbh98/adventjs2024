import { fixPackages } from '../src/07'

test('Tests', () => {
  expect(fixPackages('a(cb)de')).toBe('abcde')

  expect(fixPackages('a(bc(def)g)h')).toBe('agdefcbh')

  expect(fixPackages('abc(def(gh)i)jk')).toBe('abcighfedjk')

  expect(fixPackages('sa(u(cla)atn)s')).toBe('santaclaus')
})


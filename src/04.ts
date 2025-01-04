export function createXmasTree(height: number, ornament: string): string {
  const maxLength = height + (height - 1)
  const tree: string[] = []

  for (let i = 1; i<= height; i++) {
    const total = i * 2 - 1
    const spaces = '_'.repeat( Math.floor( ( maxLength - total ) / 2 ) )
    const stars = ornament.repeat(total)
    tree.push(`${spaces}${stars}${spaces}`)
  }

  const space = '_'.repeat( Math.floor( ( maxLength - 1 ) / 2 ) )
  const trunk = `${space}#${space}`

  return [...tree, trunk, trunk].join('\n')
}
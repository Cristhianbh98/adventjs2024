export function createFrame(names: string[]): string {
  const maxLength = Math.max(...names.map(name => name.length))
  const border = '*'.repeat(maxLength + 4)

  const inner = names.reduce((acc: string[], name: string) => {
    const spaces = ' '.repeat(maxLength - name.length)
    return [...acc, `* ${name}${spaces} *`]
  },[])

  return [border, ...inner, border].join('\n')
}
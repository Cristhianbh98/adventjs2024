export function inBox(box: string[]): boolean {
  return box.slice(1,-1)
    .some(
      str => str.slice(1,-1).includes('*')
    )
}
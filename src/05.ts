export type Shoe = {
  type: 'I' | 'R'
  size: number
}

export function organizeShoes(shoes: Shoe[]): number[] {
  const sizes = shoes.reduce((acc, shoe) => {
    const { type, size } = shoe

    if (!acc[size]) {
      acc[size] = { I: 0, R: 0 }
    }

    acc[size][type]++

    return acc
  }, {}) as Record<number, { I: number, R: number }>

  const pairs = []

  for (const size in sizes) {
    const { I, R } = sizes[size]
    const totalPair = Math.min(I, R)
    pairs.push(...Array(totalPair).fill(Number(size)))
  }

  return pairs
}
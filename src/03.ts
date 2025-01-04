type Inventory = Array<
  { name: string, quantity: number, category: string }
>

export function organizeInventory(inventory: Inventory): object {
  return inventory.reduce((acc, item) => {
    const { name, quantity, category } = item

    if (!acc[category]) {
      acc[category] = {}
    }

    if (!acc[category][name]) {
      acc[category][name] = quantity
    } else {
      acc[category][name] += quantity
    }

    return acc
  }, {})
}
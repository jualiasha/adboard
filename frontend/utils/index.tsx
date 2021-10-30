export function itemsToArray(items) {
  const array = []
  for (const item in items) {
    if (item) {
      array.push(items[item])
    }
  }
  return array
}

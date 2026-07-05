export function groupByRegion<T>(
  items: T[],
  getRegion: (item: T) => string
): { region: string; items: T[] }[] {
  const groups: { region: string; items: T[] }[] = []
  for (const item of items) {
    const region = getRegion(item)
    const group = groups.find((g) => g.region === region)
    if (group) {
      group.items.push(item)
    } else {
      groups.push({ region, items: [item] })
    }
  }
  return groups
}

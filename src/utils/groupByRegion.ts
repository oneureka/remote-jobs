export function groupByRegion<T>(
  items: T[],
  getRegion: (item: T) => string
): { region: string; items: T[] }[] {
  const map = new Map<string, T[]>()
  for (const item of items) {
    const region = getRegion(item)
    if (!map.has(region)) map.set(region, [])
    map.get(region)!.push(item)
  }
  return Array.from(map, ([region, items]) => ({ region, items }))
}

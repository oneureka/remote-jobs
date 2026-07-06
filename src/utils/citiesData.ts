import { readFileSync } from 'node:fs'

export function parseTsv(text: string): Record<string, string>[] {
  const lines = text.trim().split('\n')
  const headers = lines[0].split('\t')
  return lines.slice(1).map((line) => {
    const values = line.split('\t')
    return Object.fromEntries(headers.map((h, i) => [h, values[i] ?? '']))
  })
}

export function loadCities() {
  const globalCities = parseTsv(
    readFileSync('nomads/livable/global.tsv', 'utf-8')
  )
  const globalExtra = parseTsv(
    readFileSync('nomads/livable/global_extra.tsv', 'utf-8')
  )
  const chinaCities = parseTsv(
    readFileSync('nomads/livable/china.tsv', 'utf-8')
  )
  const climateData = parseTsv(
    readFileSync('nomads/livable/climate.tsv', 'utf-8')
  )
  const lifestyleData = parseTsv(
    readFileSync('nomads/livable/lifestyle.tsv', 'utf-8')
  )
  const visaData = parseTsv(readFileSync('nomads/livable/visa.tsv', 'utf-8'))

  const globalWithSource = globalCities.map((c) => ({
    ...c,
    _source: 'global' as const
  }))
  const chinaWithSource = chinaCities.map((c) => ({
    ...c,
    _source: 'china' as const
  }))

  return {
    globalCities,
    globalExtra,
    chinaCities,
    climateData,
    lifestyleData,
    visaData,
    allCities: [...globalWithSource, ...chinaWithSource]
  }
}

export function getAllCityParams() {
  const { globalCities, chinaCities } = loadCities()
  return [...globalCities, ...chinaCities].map((city) => ({
    params: { city: slugify(city.City) }
  }))
}

export function slugify(name: string): string {
  return name.replace(/\s+/g, '_')
}

export function deslugify(slug: string): string {
  return slug.replace(/_/g, ' ')
}

import { defineCollection } from 'astro:content'
import { glob, file } from 'astro/loaders'

const companies = defineCollection({
  loader: glob({
    base: './companies',
    pattern: '*.md'
  })
})

function parseTsv(text: string): Record<string, string>[] {
  const lines = text.trim().split('\n')
  const headers = lines[0].split('\t')
  return lines.slice(1).map((line) => {
    const values = line.split('\t')
    const row = Object.fromEntries(headers.map((h, i) => [h, values[i] ?? '']))
    return { id: row.City, ...row }
  })
}

const cities = defineCollection({
  loader: file('./nomads/livable/global.tsv', {
    parser: (text) => parseTsv(text)
  })
})

export const collections = {
  cities,
  companies
}

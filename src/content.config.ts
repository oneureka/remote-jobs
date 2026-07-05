import { defineCollection } from 'astro:content'
import { glob, file } from 'astro/loaders'

const companies = defineCollection({
  loader: glob({
    base: './companies',
    pattern: '*.md'
  })
})

export const collections = {
  companies
}

export type Frontmatter = {
  slug: string
  readingTime?: {
    text: string
    minutes: number
    time: number
    words: number
  }
  metaTitle: string
  metaDescription?: string
  metaImage?: string
  publishedAt?: string
  publishedName?: string
  features?: string[]
  version?: string
  versions?: string[]
  aria?: string
  name?: string
  by?: 'jhseo'
  gzip?: number
}

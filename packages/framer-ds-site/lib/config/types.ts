export type RoutesConfig = {
  label: string
  pages: {
    title: string
    slug: string
    draft: boolean
  }[]
}[]

export type AllRoutesConfig = {
  title: string
  slug: string
  draft: boolean
}[]

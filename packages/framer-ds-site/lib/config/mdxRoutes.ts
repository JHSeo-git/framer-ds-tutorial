import { AllRoutesConfig, RoutesConfig } from './types'

export const mdxRoutes: RoutesConfig = [
  {
    label: 'MDX Components',
    pages: [
      {
        title: 'ALL',
        slug: 'mdx/mdx-components/all',
        draft: false,
      },
    ],
  },
  {
    label: 'MDX Sample',
    pages: [
      {
        title: 'Sample',
        slug: 'mdx/mdx-components/sample',
        draft: false,
      },
      {
        title: 'Sample(markdown-it)',
        slug: 'mdx/mdx-components/sample-markdown-it',
        draft: false,
      },
      {
        title: 'Sample(gist)',
        slug: 'mdx/mdx-components/sample-gist',
        draft: false,
      },
    ],
  },
]

export const allMdxRoutes = mdxRoutes.reduce<AllRoutesConfig>((acc, curr) => {
  acc = [...acc, ...curr.pages.filter((p) => p.draft !== true)]
  return acc
}, [])

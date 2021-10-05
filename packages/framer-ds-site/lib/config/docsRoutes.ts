import { AllRoutesConfig, RoutesConfig } from './types'

export const docsRoutes: RoutesConfig = []

export const allDocsRoutes = docsRoutes.reduce<AllRoutesConfig>((acc, curr) => {
  acc = [...acc, ...curr.pages.filter((p) => p.draft !== true)]
  return acc
}, [])

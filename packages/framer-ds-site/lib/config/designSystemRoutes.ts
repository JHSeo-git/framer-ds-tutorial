import { AllRoutesConfig, RoutesConfig } from './types'

export const designSystemRoutes: RoutesConfig = []

export const allDesignSystemRoutes = designSystemRoutes.reduce<AllRoutesConfig>(
  (acc, curr) => {
    acc = [...acc, ...curr.pages.filter((p) => p.draft !== true)]
    return acc
  },
  [],
)

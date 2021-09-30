import { AllRoutesConfig, RoutesConfig } from './types'

export const colorsRoutes: RoutesConfig = [
  {
    label: 'Color Palette',
    pages: [
      {
        title: 'All Scales',
        slug: 'colors/color-palette/all-scales',
        draft: false,
      },
    ],
  },
]

export const allColorsRoutes = colorsRoutes.reduce<AllRoutesConfig>(
  (acc, curr) => {
    acc = [...acc, ...curr.pages.filter((p) => p.draft !== true)]
    return acc
  },
  [],
)

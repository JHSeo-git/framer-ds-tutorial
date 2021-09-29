export const colorsRoutes = [
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

type AllRoutes = {
  title: string
  slug: string
  draft: boolean
}[]

export const allColorsRoutes = colorsRoutes.reduce<AllRoutes>((acc, curr) => {
  acc = [...acc, ...curr.pages.filter((p) => p.draft !== true)]
  return acc
}, [])

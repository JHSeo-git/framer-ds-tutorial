export const colorsRoutes = [
  {
    label: 'Palette Composition',
    pages: [
      {
        title: 'All Scales',
        slug: 'colors/palette-composition/all-scales',
        draft: false,
      },
      {
        title: 'All Scales1',
        slug: 'colors/palette-composition/all-scales1',
        draft: false,
      },
    ],
  },
  {
    label: 'Second Label',
    pages: [
      {
        title: 'Second Label Title1',
        slug: 'colors/second-label/second-label-title1',
        draft: false,
      },
      {
        title: 'Second Label Title2',
        slug: 'colors/second-label/second-label-title2',
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

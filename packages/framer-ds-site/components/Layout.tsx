import { Box, Text } from '@framerds/react'
import { useRouter } from 'next/dist/client/router'
import { colorsRoutes } from '../lib/config/colorsRoutes'
import Header from './Header'
import Navigation from './Navigation'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()
  const routerSlug = router.query.slug

  let currentPageSlug: string | undefined
  if (typeof routerSlug === 'string') {
    currentPageSlug = routerSlug
    console.log(currentPageSlug)
  }
  return (
    <Box css={{ backgroundColor: '$loContrast' }}>
      <Box
        css={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          boxShadow: '0 0 0 1px $colors$mono5',
          zIndex: '$5',
          backgroundColor: 'inherit',
        }}
      >
        <Header height="$size65" />
      </Box>
      <Box css={{ pt: '$space65' }}>
        <Box
          as="aside"
          css={{
            position: 'fixed',
            left: 0,
            top: '$space65',
            bottom: 0,
            width: '16rem',
            borderRight: '1px solid $colors$mono5',
            display: 'none',
            backgroundColor: 'inherit',
            '@lg': {
              display: 'block',
            },
          }}
        >
          {colorsRoutes.map((section) => (
            <Box key={section.label} css={{ mb: '$space20' }}>
              <Navigation.NavHeading>{section.label}</Navigation.NavHeading>
              {section.pages.map((page) => {
                const isDraft = page.draft
                return (
                  <Navigation.NavItem
                    key={page.slug}
                    href={`/${page.slug}`}
                    disabled={isDraft}
                    active={currentPageSlug === page.slug}
                  >
                    <Text>{page.title}</Text>
                  </Navigation.NavItem>
                )
              })}
            </Box>
          ))}
        </Box>
        <Box
          as="main"
          css={{
            pl: '0',
            '@lg': {
              pl: '16rem',
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default Layout

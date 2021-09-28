import { Box, Text } from '@framerds/react'
import { useRouter } from 'next/dist/client/router'
import { useRef } from 'react'
import useOnClickOutside from '../hook/useOnClickOutside'
import { colorsRoutes } from '../lib/config/colorsRoutes'
import { useMenuOpenState } from '../store/app'
import Header from './Header'
import Navigation from './Navigation'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const menuRef = useRef(null)
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useMenuOpenState()

  const routerSlug = router.query.slug

  let currentPageSlug: string | undefined
  if (typeof routerSlug === 'string') {
    currentPageSlug = routerSlug
  }

  const handleClickOutside = () => {
    setMenuOpen(false)
  }

  useOnClickOutside(menuRef, handleClickOutside)

  return (
    <Box css={{ bc: '$loContrast' }}>
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
          role="presentation"
          css={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: menuOpen ? 1 : 0,
            transitionDuration: '0.1s',
            transitionProperty: 'all',
            visibility: menuOpen ? 'visible' : 'hidden',
            bc: 'rgba(0,0,0,0.6)',
            zIndex: '$6',
            '@lg': {
              opacity: 0,
              visibility: 'hidden',
              zIndex: '$1',
            },
          }}
        />
        <Box
          ref={menuRef}
          as="nav"
          animate={menuOpen ? 'open' : 'closed'}
          variants={{
            open: {
              opacity: 1,
              visibility: 'visible',
              transform: 'translate3d(0,0,0)',
              transition: {
                type: 'spring',
                stiffness: 20,
                restDelta: 2,
              },
            },
            closed: {
              opacity: 0,
              visibility: 'hidden',
              transform: 'translate3d(-100%,0,0)',
              transition: {
                delay: 0.2,
                type: 'spring',
                stiffness: 400,
                damping: 40,
              },
            },
          }}
          css={{
            width: '80vw',
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            backgroundColor: '$loContrast',
            borderBottom: '1px solid $colors$mono5',
            WebkitOverflowScrolling: 'touch',
            display: 'block',
            // opacity: menuOpen ? 1 : 0,
            // visibility: menuOpen ? 'visible' : 'hidden',
            py: '$space20',
            ox: 'hidden',
            zIndex: '$6',
            '@lg': {
              width: '16rem',
              top: '$space65',
              opacity: 1,
              visibility: 'visible',
              borderBottom: '0',
              borderRight: '1px solid $colors$mono5',
              zIndex: '$1',
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

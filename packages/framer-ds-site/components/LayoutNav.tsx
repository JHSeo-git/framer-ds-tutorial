import { useEffect, useRef, useState } from 'react'
import { Box, Button, Container, Flex, Text } from '@framerds/react'
import useOnClickOutside from '@hook/useOnClickOutside'
import { RoutesConfig } from '@lib/config/types'
import IconMenu from './icons/IconMenu'
import { NavHeading, NavItem } from './Navigation'
import { useRouter } from 'next/router'

export type LayoutNavProps = {
  routes: RoutesConfig
}

const LayoutNav = ({ routes }: LayoutNavProps) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const menuRef = useRef(null)

  const onClick = () => {
    setMenuOpen(true)
  }
  const handleClickOutside = () => {
    setMenuOpen(false)
  }
  useOnClickOutside(menuRef, handleClickOutside)

  const currentPageSlug = router.asPath

  useEffect(() => {
    // when router change in same <Layout>,
    // close a menu sidebar
    const handleRouteChange = () => setMenuOpen(false)
    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router, setMenuOpen])

  return (
    <>
      <Box
        css={{
          position: 'fixed',
          left: 0,
          right: 0,
          boxShadow: '0 0 0 1px $colors$mono5',
          '@lg': {
            // TODO: change alternative css for transition
            display: 'none',
          },
        }}
      >
        <Container size="w-max">
          <Flex align="center" justify="end" css={{ height: '$size45' }}>
            <Button
              onClick={onClick}
              kind="grayScale"
              size="small"
              shape="round"
              state={menuOpen ? 'active' : undefined}
              ghost
            >
              <IconMenu label="FDS Menu" />
              <Text css={{ fontWeight: '$bold', ml: '$space5' }}>Menu</Text>
            </Button>
          </Flex>
        </Container>
      </Box>
      <Box
        role="presentation"
        css={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
          transitionDuration: menuOpen ? '0.2s' : '0.4s',
          transitionProperty: 'all',
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
        // animate={menuOpen ? 'open' : 'closed'}
        // variants={{
        //   open: {
        //     opacity: 1,
        //     visibility: 'visible',
        //     transform: 'translate3d(0%,0,0)',
        //     transition: {
        //       values: ['transform', 'visibility'],
        //     },
        //   },
        //   closed: {
        //     opacity: 0,
        //     visibility: 'hidden',
        //     transform: 'translate3d(-100%,0,0)',
        //     transition: {
        //       values: ['transform', 'visibility'],
        //     },
        //   },
        // }}
        css={{
          width: '80vw',
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          backgroundColor: '$loContrast',
          WebkitOverflowScrolling: 'touch',
          display: 'block',
          py: '$space20',
          ox: 'hidden',
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
          transform: menuOpen ? 'translate3d(0,0,0)' : 'translate3d(-100%,0,0)',
          transitionDuration: '0.2s',
          transitionTimingFunction: 'ease-in-out',
          transitionProperty: 'transform visibility',
          zIndex: '$6',
          '@lg': {
            width: '16rem',
            top: '$space65',
            opacity: 1,
            visibility: 'visible',
            transform: 'translate3d(0,0,0)',
            borderRight: '1px solid $colors$mono5',
            zIndex: '$1',
          },
        }}
      >
        {routes.map((section) => (
          <Box key={section.label} css={{ mb: '$space20' }}>
            <NavHeading>{section.label}</NavHeading>
            {section.pages.map((page) => {
              const isDraft = page.draft
              return (
                <NavItem
                  key={page.slug}
                  href={`/${page.slug}`}
                  disabled={isDraft}
                  active={currentPageSlug === `/${page.slug}`}
                >
                  <Text>{page.title}</Text>
                </NavItem>
              )
            })}
          </Box>
        ))}
      </Box>
    </>
  )
}

export default LayoutNav

import NextLink from 'next/link'
import { Box, Container, Flex, Link, Separator, Button } from '@framerds/react'
import DarkThemeButton from './DarkThemeButton'
import Logo from './Logo'
import { appMenusRoutes } from '@lib/config/appMenusRoutes'
import { useRouter } from 'next/router'
import { useState, useRef } from 'react'
import useOnClickOutside from '@hook/useOnClickOutside'

export type HeaderProps = {} & React.ComponentProps<typeof Flex>['css']

const Header = ({ height }: HeaderProps) => {
  const router = useRouter()
  const currentPageSlug = router.asPath

  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const onClick = () => {
    setMenuOpen(!menuOpen)
  }

  const handleClickOutSide = () => {
    setMenuOpen(false)
  }

  useOnClickOutside(menuRef, handleClickOutSide)

  return (
    <Box as="header">
      <Container size="w-max">
        <Flex
          align="center"
          justify="between"
          css={{ height: height ?? '$size65' }}
        >
          <NextLink href="/" passHref>
            <Box as="a" css={{ color: '$secondary9', textDecoration: 'unset' }}>
              <Logo width="36" height="36" label="FDS Homepage" />
            </Box>
          </NextLink>
          <Flex align="center" gap="md">
            <Box
              ref={menuRef}
              css={{
                position: 'relative',
                zIndex: '$5',
              }}
            >
              <Button
                size="small"
                kind="grayScale"
                shape="round"
                state={menuOpen ? 'active' : undefined}
                ghost
                onClick={onClick}
                css={{
                  '@md': {
                    display: 'none',
                  },
                }}
              >
                ROUTES +
              </Button>
              <Box
                as="nav"
                css={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  display: menuOpen ? 'block' : 'none',
                  mt: '$space10',
                  p: '$lg',
                  brd: '$mono5',
                  br: '$radius4',
                  bc: '$mono1',
                  '@md': {
                    position: 'revert',
                    display: 'block',
                    mt: 0,
                    p: 0,
                    bc: 'inherit',
                    brd: 'none',
                    br: 'none',
                  },
                }}
              >
                <Flex
                  gap="lg"
                  css={{
                    flexDirection: 'column',
                    '@md': {
                      flexDirection: 'row',
                      ac: 'center',
                    },
                  }}
                >
                  {appMenusRoutes.map((menu) => (
                    <NextLink key={menu.slug} href={menu.slug} passHref>
                      <Link
                        shape="pill"
                        // variant="blueLink"
                        variant={
                          `/${currentPageSlug.split('/')[1]}` === menu.slug
                            ? 'blueLink'
                            : 'contrast'
                        }
                        href={menu.slug}
                        css={{
                          fontSize: '$sm',
                        }}
                      >
                        {menu.title}
                      </Link>
                    </NextLink>
                  ))}
                </Flex>
              </Box>
            </Box>
            <Separator direction="vertical" size="middle" css={{ ml: '$md' }} />
            <DarkThemeButton />
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header

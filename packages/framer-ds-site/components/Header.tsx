import NextLink from 'next/link'
import { Box, Container, Flex, Link, Separator, Text } from '@framerds/react'
import DarkThemeButton from './DarkThemeButton'
import Logo from './Logo'
import { appMenusRoutes } from '@lib/config/appMenusRoutes'
import { useRouter } from 'next/router'

export type HeaderProps = {} & React.ComponentProps<typeof Flex>['css']

const Header = ({ height }: HeaderProps) => {
  const router = useRouter()
  const currentPageSlug = router.asPath

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
              as="nav"
              css={{
                display: 'none',
                '@md': {
                  display: 'block',
                },
              }}
            >
              <Flex align="center" gap="lg">
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
                <Separator direction="vertical" size="middle" />
              </Flex>
            </Box>
            <DarkThemeButton />
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header

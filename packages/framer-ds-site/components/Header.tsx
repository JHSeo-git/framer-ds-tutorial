import NextLink from 'next/link'
import { Box, Button, Container, Flex } from '@framerds/react'
import DarkThemeButton from './DarkThemeButton'
import Logo from './Logo'
import IconMenu from './icons/IconMenu'

export type HeaderProps = {} & React.ComponentProps<typeof Flex>['css']

const Header = ({ height }: HeaderProps) => {
  return (
    <Box as="header">
      <Container size="w-xl">
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
            <DarkThemeButton />
            <Button
              kind="grayScale"
              size="small"
              shape="round"
              ghost
              css={{
                '@lg': {
                  display: 'none',
                },
              }}
            >
              <IconMenu label="FDS Menu" />
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header

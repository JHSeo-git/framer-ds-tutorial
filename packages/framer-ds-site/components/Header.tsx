import NextLink from 'next/link'
import { Box, Container, Flex, Text } from '@framerds/react'
import DarkThemeButton from './DarkThemeButton'
import FDSLogo from './FDSLogo'

export type HeaderProps = {}

const Header = (props: HeaderProps) => {
  return (
    <Box as="header">
      <Container>
        <Flex align="center" justify="between" css={{ height: '$size65' }}>
          <NextLink href="/" passHref>
            <Box
              as="a"
              css={{ color: '$secondary800', textDecoration: 'unset' }}
            >
              <FDSLogo width="32" height="32" label="FDS Homepage" />
            </Box>
          </NextLink>
          <DarkThemeButton />
        </Flex>
      </Container>
    </Box>
  )
}

export default Header

import NextLink from 'next/link'
import { Box, Container, Flex, Text } from '@framerds/react'
import DarkThemeButton from './DarkThemeButton'

export type HeaderProps = {}

const Header = (props: HeaderProps) => {
  return (
    <Box as="header">
      <Container>
        <Flex align="center" justify="between" css={{ height: '$size65' }}>
          <NextLink href="/" passHref>
            <Box as="a" css={{ textDecoration: 'unset' }}>
              <Text color="secondary">FDS</Text>
            </Box>
          </NextLink>
          <DarkThemeButton />
        </Flex>
      </Container>
    </Box>
  )
}

export default Header

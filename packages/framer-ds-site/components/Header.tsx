import NextLink from 'next/link'
import { Box, Container, Flex } from '@framerds/react'
import DarkThemeButton from './DarkThemeButton'
import FDSLogo from './FDSLogo'

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
              <FDSLogo width="36" height="36" label="FDS Homepage" />
            </Box>
          </NextLink>
          <DarkThemeButton />
        </Flex>
      </Container>
    </Box>
  )
}

export default Header

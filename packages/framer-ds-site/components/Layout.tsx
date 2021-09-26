import { Box } from '@framerds/react'
import Header from './Header'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box
        css={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          boxShadow: '0 0 0 1px $mono900',
          zIndex: '$5',
          backgroundColor: '$loContrast',
        }}
      >
        <Header height="$size65" />
      </Box>
      <Box css={{ pt: '$space65' }}>
        <Box as="aside"></Box>
        <Box as="main">{children}</Box>
      </Box>
    </>
  )
}

export default Layout

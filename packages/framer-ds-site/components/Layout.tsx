import { Box } from '@framerds/react'
import Header from './Header'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
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
        ></Box>
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

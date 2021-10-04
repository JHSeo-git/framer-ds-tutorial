import React from 'react'
import { Box } from '@framerds/react'
import { RoutesConfig } from '@lib/config/types'
import Header from './Header'
import LayoutNav from './LayoutNav'

export type LayoutProps = {
  children: React.ReactNode
  routes?: RoutesConfig
  pure?: boolean
}

const Layout = ({ children, routes, pure = false }: LayoutProps) => {
  if (pure) {
    return <Box css={{ height: '100%', bc: '$loContrast' }}>{children}</Box>
  }

  return (
    <Box css={{ minHeight: '100%', bc: '$loContrast' }}>
      <Box
        css={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          boxShadow: '0 0 0 1px $colors$mono5',
          zIndex: '$5',
          bc: '$loContrast',
        }}
      >
        <Header height="$size65" />
      </Box>
      <Box css={{ pt: '$space65' }}>
        {routes && <LayoutNav routes={routes} />}
        <Box
          as="main"
          css={{
            pt: '$space45',
            pl: '0',
            '@lg': {
              pl: routes ? '16rem' : '0',
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

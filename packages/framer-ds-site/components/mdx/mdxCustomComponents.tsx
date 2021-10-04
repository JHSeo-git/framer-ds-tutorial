import * as FDS from '@framerds/react'
import React from 'react'

const mdxCustomComponents = {
  Box: ({ children, ...props }: React.ComponentProps<typeof FDS.Box>) => {
    return <FDS.Box {...props}>{children}</FDS.Box>
  },
  Text: ({ children, ...props }: React.ComponentProps<typeof FDS.Text>) => {
    return (
      <FDS.Text {...props} as="p" css={{ mb: '$space15' }}>
        {children}
      </FDS.Text>
    )
  },

  // Kbd
}

export default mdxCustomComponents

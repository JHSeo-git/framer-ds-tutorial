import { styled } from '@src/lib/stitches'
import React from 'react'

export type ContainerProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof BaseContainer>

const Container = ({ children, ...rest }: ContainerProps) => {
  return <BaseContainer {...rest}>{children}</BaseContainer>
}

const BaseContainer = styled('div', {
  // reset
  boxSizing: 'border-box',
  flexShrink: 0,

  // custom center
  ml: 'auto',
  mr: 'auto',
  px: '$space25',

  defaultVariants: {
    size: 'w-md',
  },
  variants: {
    size: {
      'w-sm': {
        maxWidth: '430px',
      },
      'w-md': {
        maxWidth: '715px',
      },
      'w-lg': {
        maxWidth: '1145px',
      },
      'w-xl': {
        maxWidth: 'none',
      },
    },
  },
})

export default Container

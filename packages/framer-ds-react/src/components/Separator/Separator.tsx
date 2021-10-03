import { Box } from '../Box'
import { styled } from '@src/lib/stitches'
import React from 'react'

type Direction = 'horizontal' | 'vertical'
export type SeparatorProps = {
  direction: Direction
  decorative?: boolean
} & React.ComponentPropsWithoutRef<typeof BaseSeparator>

const Separator = React.forwardRef<
  React.ElementRef<typeof BaseSeparator>,
  SeparatorProps
>(({ direction, decorative = false, ...rest }, forwardedRef) => {
  const semanticProps = decorative
    ? { role: 'none' }
    : {
        'aria-orientation': direction,
        role: 'separator',
      }
  return (
    <BaseSeparator
      ref={forwardedRef}
      data-orientation={direction}
      {...semanticProps}
      {...rest}
    />
  )
})

const BaseSeparator = styled(Box, {
  // reset
  border: 'none',
  margin: 0,
  padding: 0,
  flexShrink: 0,

  // default
  backgroundColor: '$mono6',
  cursor: 'default',

  variants: {
    size: {
      small: {
        '&[data-orientation="horizontal"]': {
          height: '0.0625rem',
          width: '$size15',
        },
        '&[data-orientation="vertical"]': {
          height: '$size15',
          width: '0.0625rem',
        },
      },
      middle: {
        '&[data-orientation="horizontal"]': {
          height: '0.0625rem',
          width: '$size25',
        },
        '&[data-orientation="vertical"]': {
          height: '$size25',
          width: '0.0625rem',
        },
      },
      large: {
        '&[data-orientation="horizontal"]': {
          height: '0.0625rem',
          width: '$size45',
        },
        '&[data-orientation="vertical"]': {
          height: '$size45',
          width: '0.0625rem',
        },
      },
      xl: {
        '&[data-orientation="horizontal"]': {
          height: '0.0625rem',
          width: '$size80',
        },
        '&[data-orientation="vertical"]': {
          height: '$size80',
          width: '0.0625rem',
        },
      },
      max: {
        '&[data-orientation="horizontal"]': {
          height: '0.0625rem',
          width: '100%',
        },
        '&[data-orientation="vertical"]': {
          height: '100%',
          width: '0.0625rem',
        },
      },
    },
  },
})
export default Separator

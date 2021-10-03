import React from 'react'
import { styled } from '@src/lib/stitches'
import { Text } from '../Text'

export type LinkProps = {
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<typeof BaseLink>

const Link = React.forwardRef<React.ElementRef<typeof BaseLink>, LinkProps>(
  ({ children, ...rest }, forwardedRef) => {
    return (
      <BaseLink ref={forwardedRef} {...rest}>
        {children}
      </BaseLink>
    )
  },
)

const BaseLink = styled('a', {
  // reset
  outline: 'none',
  textDecoration: 'none',

  // default
  textUnderlineOffset: '0.25rem',
  textDecorationColor: '$mono5',
  lineHeight: 'inherit',

  '@hover': {
    '&:hover': {
      textDecorationLine: 'underline',
    },
  },

  '&:focus': {
    outlineWidth: '0.125rem',
    outlineStyle: 'solid',
    outlineOffset: '0.125rem',
    textDecorationLine: 'none',
  },

  [`& ${Text}`]: {
    color: 'inherit',
  },

  defaultVariants: {
    variant: 'contrast',
  },
  variants: {
    shape: {
      round: {
        br: '$round',
      },
      pill: {
        br: '$pill',
      },
    },
    variant: {
      contrast: {
        color: '$hiContrast',
        textDecoration: 'underline',
        textDecorationColor: '$mono5',
        '@hover': {
          '&:hover': {
            textDecorationColor: '$mono7',
          },
        },
        '&:focus': {
          outlineColor: '$mono8',
        },
      },
      primary: {
        color: '$primary11',
        textDecoration: 'underline',
        textDecorationColor: '$primary5',
        '@hover': {
          '&:hover': {
            textDecorationColor: '$primary7',
          },
        },
        '&:focus': {
          outlineColor: '$primary8',
        },
      },
      secondary: {
        color: '$secondary11',
        textDecoration: 'underline',
        textDecorationColor: '$secondary5',
        '@hover': {
          '&:hover': {
            textDecorationColor: '$secondary7',
          },
        },
        '&:focus': {
          outlineColor: '$secondary8',
        },
      },
      teritary: {
        color: '$teritary11',
        textDecoration: 'underline',
        textDecorationColor: '$teritary5',
        '@hover': {
          '&:hover': {
            textDecorationColor: '$teritary7',
          },
        },
        '&:focus': {
          outlineColor: '$teritary8',
        },
      },
    },
  },
})
export default Link

import React from 'react'
import { styled } from '@src/lib/stitches'

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
        '@hover': {
          '&:hover': {
            textDecoration: 'underline',
            textDecorationColor: '$mono7',
          },
        },
        '&:focus': {
          textDecoration: 'none',
          outlineColor: '$mono8',
        },
      },
      blueLink: {
        color: '$secondary10',
        '@hover': {
          '&:hover': {
            color: '$secondary11',
            textDecoration: 'underline',
            textDecorationColor: '$secondary10',
          },
        },
        '&:focus': {
          textDecoration: 'none',
          outlineColor: '$secondary8',
        },
      },
    },
  },
})
export default Link

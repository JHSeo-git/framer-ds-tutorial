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
      blueLink: {
        color: '$secondary10',
        textDecorationColor: '$secondary8',
        textDecoration: 'underline',
        '@hover': {
          '&:hover': {
            color: '$secondary11',
            textDecorationColor: '$secondary10',
          },
        },
        '&:focus': {
          outlineColor: '$secondary8',
        },
      },
    },
  },
})
export default Link

import React from 'react'
import { motion } from 'framer-motion'
import { styled } from '@src/lib/stitches'
import { ButtonMotion, buttonWhileMotion } from '@src/lib/motions/motionButton'

export type ButtonProps = {
  buttonMotion?: ButtonMotion
  children: React.ReactNode
} & React.ComponentProps<typeof BaseButton> &
  React.ComponentProps<typeof motion.button>

const Button = ({ buttonMotion, children, ...rest }: ButtonProps) => {
  if (buttonMotion) {
    return (
      <BaseButton
        as={motion.button}
        {...buttonWhileMotion(buttonMotion)}
        {...rest}
      >
        {children}
      </BaseButton>
    )
  }
  return <BaseButton {...rest}>{children}</BaseButton>
}

const BaseButton = styled('button', {
  // reset
  all: 'unset',
  appearance: 'none',
  border: '0',
  userSelect: 'none',
  boxSizing: 'border-box',
  cursor: 'pointer',

  // defaults
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  // themes - fonts
  fontFamily: '$text',
  fontVariantNumeric: 'tabular-nums',
  fontSize: '$base',
  fontWeight: '$bold',
  lineHeight: '$base',

  // sizes
  height: '$size35',
  px: '$space20',

  '&:disabled': {
    backgroundColor: '$mono3',
    brd: '$mono7',
    color: '$mono8',
    pointerEvents: 'none',
  },

  defaultVariants: {
    kind: 'grayScale',
  },
  variants: {
    kind: {
      grayScale: {
        backgroundColor: '$mono4',
        color: '$mono11',
        brd: '$mono7',
        '@hover': {
          '&:hover': {
            backgroundColor: '$mono6',
            brd: '$mono8',
          },
        },
        '&:active': {
          backgroundColor: '$mono8',
          brd: '$mono9',
        },
        '&:focus, &:focus-visible': {
          brdFocus: '$mono9',
        },
      },
      primary: {
        backgroundColor: '$primary4',
        color: '$primary11',
        brd: '$primary7',
        '@hover': {
          '&:hover': {
            backgroundColor: '$primary6',
            brd: '$primary8',
          },
        },
        '&:active': {
          backgroundColor: '$primary8',
          brd: '$primary9',
        },
        '&:focus, &:focus-visible': {
          brdFocus: '$primary9',
        },
      },
      secondary: {
        backgroundColor: '$secondary4',
        color: '$secondary11',
        brd: '$secondary7',
        '@hover': {
          '&:hover': {
            backgroundColor: '$secondary6',
            brd: '$secondary8',
          },
        },
        '&:active': {
          backgroundColor: '$secondary8',
          brd: '$secondary9',
        },
        '&:focus, &:focus-visible': {
          brdFocus: '$secondary9',
        },
      },
      teritary: {
        backgroundColor: '$teritary4',
        color: '$teritary11',
        brd: '$teritary7',
        '@hover': {
          '&:hover': {
            backgroundColor: '$teritary6',
            brd: '$teritary8',
          },
        },
        '&:active': {
          backgroundColor: '$teritary8',
          brd: '$teritary9',
        },
        '&:focus, &:focus-visible': {
          brdFocus: '$teritary9',
        },
      },
      success: {
        backgroundColor: '$success4',
        color: '$success11',
        brd: '$success7',
        '@hover': {
          '&:hover': {
            backgroundColor: '$success6',
            brd: '$success8',
          },
        },
        '&:active': {
          backgroundColor: '$success8',
          brd: '$success7',
        },
        '&:focus, &:focus-visible': {
          brdFocus: '$success9',
        },
      },
      warning: {
        backgroundColor: '$warning4',
        color: '$warning11',
        brd: '$warning7',
        '@hover': {
          '&:hover': {
            backgroundColor: '$warning6',
            brd: '$warning8',
          },
        },
        '&:active': {
          backgroundColor: '$warning8',
          brd: '$warning9',
        },
        '&:focus, &:focus-visible': {
          brdFocus: '$warning9',
        },
      },
      error: {
        backgroundColor: '$error4',
        color: '$error11',
        brd: '$error7',
        '@hover': {
          '&:hover': {
            backgroundColor: '$error6',
            brd: '$error8',
          },
        },
        '&:active': {
          backgroundColor: '$error8',
          brd: '$error9',
        },
        '&:focus, &:focus-visible': {
          brdFocus: '$error9',
        },
      },
      transparentWhite: {
        backgroundColor: 'hsla(0,100%,100%,0.2)',
        color: 'white',
        '@hover': {
          '&:hover': {
            backgroundColor: 'hsla(0,100%,100%,0.25)',
          },
        },
        '&:active': {
          backgroundColor: 'hsla(0,100%,100%,0.3)',
        },
        '&:focus, &:focus-visible': {
          brdFocus: 'hsla(0,100%,100%,0.35)',
        },
      },
      transparentBlack: {
        backgroundColor: 'hsla(0,0%,0%,0.2)',
        color: 'black',
        '@hover': {
          '&:hover': {
            backgroundColor: 'hsla(0,0%,0%,0.25)',
          },
        },
        '&:active': {
          backgroundColor: 'hsla(0,0%,0%,0.3)',
        },
        '&:focus, &:focus-visible': {
          brdFocus: 'hsla(0,0%,0%,0.35)',
        },
      },
    },
    shape: {
      round: {
        borderRadius: '$radius4',
      },
      circle: {
        borderRadius: '$round',
      },
      pill: {
        borderRadius: '$pill',
      },
    },
    size: {
      small: {
        fontSize: '$sm',
        height: '$size25',
        px: '$space10',
      },
      large: {
        fontSize: '$xl',
        height: '$size45',
        px: '$space35',
      },
    },
    state: {
      active: {
        backgroundColor: '$mono4',
        brd: '$mono7',
        color: '$mono12',
        '@hover': {
          '&:hover': {
            backgroundColor: '$mono5',
            brd: '$mono8',
          },
          '&:active': {
            backgroundColor: '$mono5',
          },
          '&:focus, &:focus-visible': {
            brdFocus: '$mono9',
          },
        },
      },
      waiting: {
        backgroundColor: '$mono4',
        brd: '$mono7',
        color: '$transparent',
        pointerEvents: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$mono5',
            brd: '$mono8',
          },
          '&:active': {
            backgroundColor: '$mono5',
          },
          '&:focus, &:focus-visible': {
            brdFocus: '$mono9',
          },
        },
      },
    },
    ghost: {
      true: {
        backgroundColor: '$transparent',
        boxShadow: 'revert',
      },
    },
  },
  compoundVariants: [
    {
      kind: 'grayScale',
      ghost: 'true',
      css: {
        backgroundColor: '$transparent',
        boxShadow: 'none',
        color: '$hiContrast',
        '@hover': {
          '&:hover': {
            backgroundColor: '$monoA3',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$monoA4',
        },
        '&:focus, &:focus-visible': {
          brdFocus: '$monoA9',
        },
      },
    },
    {
      kind: 'primary',
      ghost: 'true',
      css: {
        backgroundColor: '$transparent',
        boxShadow: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$primaryA3',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$primaryA4',
        },
        '&:focus, &:focus-visible': {
          brdFocus: '$primaryA9',
        },
      },
    },
    {
      kind: 'secondary',
      ghost: 'true',
      css: {
        backgroundColor: '$transparent',
        boxShadow: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$secondaryA3',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$secondaryA4',
        },
        '&:focus, &:focus-visible': {
          brdFocus: '$secondaryA9',
        },
      },
    },
    {
      kind: 'teritary',
      ghost: 'true',
      css: {
        backgroundColor: '$transparent',
        boxShadow: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$teritaryA3',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$teritaryA4',
        },
        '&:focus, &:focus-visible': {
          brdFocus: '$teritaryA9',
        },
      },
    },
    {
      kind: 'success',
      ghost: 'true',
      css: {
        backgroundColor: '$transparent',
        boxShadow: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$successA3',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$successA4',
        },
        '&:focus, &:focus-visible': {
          brdFocus: '$successA9',
        },
      },
    },
    {
      kind: 'warning',
      ghost: 'true',
      css: {
        backgroundColor: '$transparent',
        boxShadow: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$warningA3',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$warningA4',
        },
        '&:focus, &:focus-visible': {
          brdFocus: '$warningA9',
        },
      },
    },
    {
      kind: 'error',
      ghost: 'true',
      css: {
        backgroundColor: '$transparent',
        boxShadow: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$errorA3',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$errorA4',
        },
        '&:focus, &:focus-visible': {
          brdFocus: '$errorA9',
        },
      },
    },
  ],
})

export default Button

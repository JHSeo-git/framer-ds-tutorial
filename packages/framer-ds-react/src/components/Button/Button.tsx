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
    boxShadow: 'inset 0 0 0 1px $colors$mono7',
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
        boxShadow: 'inset 0 0 0 1px $colors$mono7',
        '@hover': {
          '&:hover': {
            backgroundColor: '$mono6',
            boxShadow: 'inset 0 0 0 1px $colors$mono9',
          },
        },
        '&:active': {
          backgroundColor: '$mono8',
          boxShadow: 'inset 0 0 0 1px $colors$mono9',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$mono9, 0 0 0 1px $colors$mono9',
        },
        '&:focus-visible': {
          boxShadow: 'inset 0 0 0 1px $colors$mono9, 0 0 0 1px $colors$mono9',
        },
      },
      primary: {
        backgroundColor: '$primary4',
        color: '$primary11',
        boxShadow: 'inset 0 0 0 1px $colors$primary7',
        '@hover': {
          '&:hover': {
            backgroundColor: '$primary6',
            boxShadow: 'inset 0 0 0 1px $colors$primary8',
          },
        },
        '&:active': {
          backgroundColor: '$primary8',
          boxShadow: 'inset 0 0 0 1px $colors$primary9',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$primary9, 0 0 0 1px $colors$primary9',
        },
        '&:focus-visible': {
          boxShadow:
            'inset 0 0 0 1px $colors$primary9, 0 0 0 1px $colors$primary9',
        },
      },
      secondary: {
        backgroundColor: '$secondary4',
        color: '$secondary11',
        boxShadow: 'inset 0 0 0 1px $colors$secondary7',
        '@hover': {
          '&:hover': {
            backgroundColor: '$secondary6',
            boxShadow: 'inset 0 0 0 1px $colors$secondary8',
          },
        },
        '&:active': {
          backgroundColor: '$secondary8',
          boxShadow: 'inset 0 0 0 1px $colors$secondary9',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$secondary9, 0 0 0 1px $colors$secondary9',
        },
        '&:focus-visible': {
          boxShadow:
            'inset 0 0 0 1px $colors$secondary9, 0 0 0 1px $colors$secondary9',
        },
      },
      teritary: {
        backgroundColor: '$teritary4',
        color: '$teritary11',
        boxShadow: 'inset 0 0 0 1px $colors$teritary7',
        '@hover': {
          '&:hover': {
            backgroundColor: '$teritary6',
            boxShadow: 'inset 0 0 0 1px $colors$teritary8',
          },
        },
        '&:active': {
          backgroundColor: '$teritary8',
          boxShadow: 'inset 0 0 0 1px $colors$teritary9',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$teritary9, 0 0 0 1px $colors$teritary9',
        },
        '&:focus-visible': {
          boxShadow:
            'inset 0 0 0 1px $colors$teritary9, 0 0 0 1px $colors$teritary9',
        },
      },
      success: {
        backgroundColor: '$success4',
        color: '$success11',
        boxShadow: 'inset 0 0 0 1px $colors$success7',
        '@hover': {
          '&:hover': {
            backgroundColor: '$success6',
            boxShadow: 'inset 0 0 0 1px $colors$success8',
          },
        },
        '&:active': {
          backgroundColor: '$success8',
          boxShadow: 'inset 0 0 0 1px $colors$success9',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$success9, 0 0 0 1px $colors$success9',
        },
        '&:focus-visible': {
          boxShadow:
            'inset 0 0 0 1px $colors$success9, 0 0 0 1px $colors$success9',
        },
      },
      warning: {
        backgroundColor: '$warning4',
        color: '$warning11',
        boxShadow: 'inset 0 0 0 1px $colors$warning7',
        '@hover': {
          '&:hover': {
            backgroundColor: '$warning6',
            boxShadow: 'inset 0 0 0 1px $colors$warning8',
          },
        },
        '&:active': {
          backgroundColor: '$warning8',
          boxShadow: 'inset 0 0 0 1px $colors$warning9',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$warning9, 0 0 0 1px $colors$warning9',
        },
        '&:focus-visible': {
          boxShadow:
            'inset 0 0 0 1px $colors$warning9, 0 0 0 1px $colors$warning9',
        },
      },
      error: {
        backgroundColor: '$error4',
        color: '$error11',
        boxShadow: 'inset 0 0 0 1px $colors$error7',
        '@hover': {
          '&:hover': {
            backgroundColor: '$error6',
            boxShadow: 'inset 0 0 0 1px $colors$error8',
          },
        },
        '&:active': {
          backgroundColor: '$error8',
          boxShadow: 'inset 0 0 0 1px $colors$error9',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$error9, 0 0 0 1px $colors$error9',
        },
        '&:focus-visible': {
          boxShadow: 'inset 0 0 0 1px $colors$error9, 0 0 0 1px $colors$error9',
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
        '&:fucus': {
          boxShadow:
            'inset 0 0 0 1px hsla(0,100%,100%,0.35), 0 0 0 1px hsla(0,100%,100%,0.35)',
        },
        '&:fucus-visible': {
          boxShadow:
            'inset 0 0 0 1px hsla(0,100%,100%,0.35), 0 0 0 1px hsla(0,100%,100%,0.35)',
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
        '&:fucus': {
          boxShadow:
            'inset 0 0 0 1px hsla(0,0%,0%,0.35), 0 0 0 1px hsla(0,0%,0%,0.35)',
        },
        '&:fucus-visible': {
          boxShadow:
            'inset 0 0 0 1px hsla(0,0%,0%,0.35), 0 0 0 1px hsla(0,0%,0%,0.35)',
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
        boxShadow: 'inset 0 0 0 1px $colors$mono7',
        color: '$mono12',
        '@hover': {
          '&:hover': {
            backgroundColor: '$mono5',
            boxShadow: 'inset 0 0 0 1px $colors$mono8',
          },
          '&:active': {
            backgroundColor: '$mono5',
          },
          '&:focus': {
            boxShadow: 'inset 0 0 0 1px $colors$mono9, 0 0 0 1px $colors$mono9',
          },
          '&:focus-visible': {
            boxShadow: 'inset 0 0 0 1px $colors$mono9, 0 0 0 1px $colors$mono9',
          },
        },
      },
      waiting: {
        backgroundColor: '$mono4',
        boxShadow: 'inset 0 0 0 1px $colors$mono7',
        color: '$transparent',
        pointerEvents: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$mono5',
            boxShadow: 'inset 0 0 0 1px $colors$mono8',
          },
          '&:active': {
            backgroundColor: '$mono5',
          },
          '&:focus': {
            boxShadow: 'inset 0 0 0 1px $colors$mono9, 0 0 0 1px $colors$mono9',
          },
          '&:focus-visible': {
            boxShadow: 'inset 0 0 0 1px $colors$mono9, 0 0 0 1px $colors$mono9',
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
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$monoA9, 0 0 0 1px $colors$monoA9',
        },
        '&:focus-visible': {
          boxShadow: 'inset 0 0 0 1px $colors$monoA9, 0 0 0 1px $colors$monoA9',
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
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$primaryA9, 0 0 0 1px $colors$primaryA9',
        },
        '&:focus-visible': {
          boxShadow:
            'inset 0 0 0 1px $colors$primaryA9, 0 0 0 1px $colors$primaryA9',
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
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$secondaryA9, 0 0 0 1px $colors$secondaryA9',
        },
        '&:focus-visible': {
          boxShadow:
            'inset 0 0 0 1px $colors$secondaryA9, 0 0 0 1px $colors$secondaryA9',
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
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$teritaryA9, 0 0 0 1px $colors$teritaryA9',
        },
        '&:focus-visible': {
          boxShadow:
            'inset 0 0 0 1px $colors$teritaryA9, 0 0 0 1px $colors$teritaryA9',
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
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$successA9, 0 0 0 1px $colors$successA9',
        },
        '&:focus-visible': {
          boxShadow:
            'inset 0 0 0 1px $colors$successA9, 0 0 0 1px $colors$successA9',
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
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$warningA9, 0 0 0 1px $colors$warningA9',
        },
        '&:focus-visible': {
          boxShadow:
            'inset 0 0 0 1px $colors$warningA9, 0 0 0 1px $colors$warningA9',
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
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$errorA9, 0 0 0 1px $colors$errorA9',
        },
        '&:focus-visible': {
          boxShadow:
            'inset 0 0 0 1px $colors$errorA9, 0 0 0 1px $colors$errorA9',
        },
      },
    },
  ],
})

export default Button

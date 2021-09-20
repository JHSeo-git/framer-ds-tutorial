import { styled } from '@src/lib/stitches'
import { motion } from 'framer-motion'
import React, { ElementType } from 'react'

export type ButtonProps = {
  animate?: boolean
  as?: ElementType
  href?: string
  target?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
} & React.ComponentProps<typeof BaseButton>

const Button = ({
  animate = false,
  as = motion.button,
  href,
  target,
  onClick,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <BaseButton onClick={onClick} as={as} href={href} target={target} {...rest}>
      {children}
    </BaseButton>
  )
}

const BaseButton = styled(motion.button, {
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
  height: '$size45',
  px: '$space20',

  '&:disabled': {
    backgroundColor: '$mono100',
    boxShadow: 'inset 0 0 0 1px $mono600',
    color: '$mono700',
    pointerEvents: 'none',
  },

  defaultVariants: {
    kind: 'grayScale',
    type: 'button',
  },
  variants: {
    kind: {
      grayScale: {
        backgroundColor: '$mono300',
        color: '$mono1100',
        '&:hover': {
          backgroundColor: '$mono500',
          boxShadow: 'inset 0 0 0 1px $mono500',
        },
        '&:active': {
          backgroundColor: '$mono700',
          boxShadow: 'inset 0 0 0 1px $mono500',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $mono500, 0 0 0 1px &mono500',
        },
        '&:focus-visible': {
          boxShadow: 'inset 0 0 0 1px $mono500, 0 0 0 1px &mono500',
        },
      },
      primary: {
        backgroundColor: '$primary300',
        color: '$mono1100',
        '&:hover': {
          backgroundColor: '$primary500',
          boxShadow: 'inset 0 0 0 1px $primary500',
        },
        '&:active': {
          backgroundColor: '$primary700',
          boxShadow: 'inset 0 0 0 1px $primary500',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $primary500, 0 0 0 1px &primary500',
        },
        '&:focus-visible': {
          boxShadow: 'inset 0 0 0 1px $primary500, 0 0 0 1px &primary500',
        },
      },
      secondary: {
        backgroundColor: '$secondary300',
        color: '$mono1100',
        '&:hover': {
          backgroundColor: '$secondary500',
          boxShadow: 'inset 0 0 0 1px $secondary500',
        },
        '&:active': {
          backgroundColor: '$secondary700',
          boxShadow: 'inset 0 0 0 1px $secondary500',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $secondary500, 0 0 0 1px &secondary500',
        },
        '&:focus-visible': {
          boxShadow: 'inset 0 0 0 1px $secondary500, 0 0 0 1px &secondary500',
        },
      },
      teritary: {
        backgroundColor: '$teritary300',
        color: '$mono1100',
        '&:hover': {
          backgroundColor: '$teritary500',
          boxShadow: 'inset 0 0 0 1px $teritary500',
        },
        '&:active': {
          backgroundColor: '$teritary700',
          boxShadow: 'inset 0 0 0 1px $teritary500',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $teritary500, 0 0 0 1px &teritary500',
        },
        '&:focus-visible': {
          boxShadow: 'inset 0 0 0 1px $teritary500, 0 0 0 1px &teritary500',
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
    type: {
      button: {},
      submit: {},
      link: {},
    },
    state: {
      active: {},
      waiting: {},
      ghost: {},
    },
    size: {
      small: {
        fontSize: '$sm',
        height: '$size35',
        px: '$space10',
      },
      large: {
        fontSize: '$xl',
        height: '$size65',
        px: '$space35',
      },
    },
  },
})

export default Button

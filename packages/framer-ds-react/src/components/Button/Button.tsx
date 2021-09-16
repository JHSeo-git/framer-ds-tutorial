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
  kind = 'primary',
  type = 'button',
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

  '&:disabled': {
    backgroundColor: '$mono100',
    boxShadow: 'inset 0 0 0 1px $colors$mono600',
    color: '$mono700',
    pointerEvents: 'none',
  },

  variants: {
    kind: {
      primary: {
        backgroundColor: '$bgPrimary',
        color: '$fgPrimary',
        '&:hover': {
          backgroundColor: '$bgInversePrimary',
        },
      },
      secondary: {
        backgroundColor: '$bgSecondary',
        color: '$fgSecondary',
        '&:hover': {
          backgroundColor: '$bgInverseSecondary',
        },
      },
      teritary: {
        backgroundColor: '$bgTeritary',
        color: '$fgTeritary',
        '&:hover': {
          backgroundColor: '$bgInverseTeritary',
        },
      },
    },
    shape: {
      round: {
        borderRadius: '$2',
      },
      circle: {
        borderRadius: '$round',
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
      },
      large: {
        fontSize: '$lg',
      },
    },
  },
})

export default Button

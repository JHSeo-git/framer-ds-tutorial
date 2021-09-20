import { styled } from '@src/lib/stitches'
import { motion } from 'framer-motion'
import React from 'react'

export type CardProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof BaseCard>

const Card = ({ children, ...rest }: CardProps) => {
  return <BaseCard {...rest}>{children}</BaseCard>
}

const BaseCard = styled(motion.div, {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  outline: 'none',
  textDecoration: 'none',
  display: 'block',

  // default
  font: 'inherit',
  lineHeight: '$base',
  padding: '0',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  backgroundColor: '$white',
  color: 'inherit',
  flexShrink: 0,
  borderRadius: '$radius6',
  position: 'relative',

  '&::before': {
    boxSizing: 'border-box',
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
    borderRadius: '$radius8',
    pointerEvents: 'none',
  },

  variants: {
    variant: {
      interactive: {
        '@hover': {
          '&:hover': {
            '&::before': {
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.2)',
            },
          },
          '&:focus': {
            '&::before': {
              boxShadow:
                'inset 0 0 0 1px $colors$mono700, 0 0 0 1px $colors$mono700',
            },
          },
        },
      },
      ghost: {
        backgroundColor: '$transparent',
        transition:
          'transform 200ms cubic-bezier(0.22, 1, 0.36, 1), background-color 25ms linear',
        willChange: 'transform',
        '&::before': {
          boxShadow:
            '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
          opacity: 0,
          transition: 'all 200ms cubic-bezier(0.22, 1, 0.36, 1)',
        },
        '@hover': {
          '&:hover': {
            backgroundColor: '$white',
            transform: 'translateY(-2px)',
            '&::before': {
              opacity: 1,
            },
          },
          '&:active': {
            transform: 'translateY(0)',
            transition: 'none',
            '&::before': {
              boxShadow:
                '0px 5px 16px -5px rgba(22, 23, 24, 0.35), 0px 5px 10px -7px rgba(22, 23, 24, 0.2)',
              opacity: '1',
            },
          },
          '&:focus': {
            boxShadow:
              'inset 0 0 0 1px $colors$primary500, 0 0 0 1px $colors$primary500',
          },
        },
      },
      active: {
        transform: 'translateY(0)',
        transition: 'none',
        '&::before': {
          boxShadow:
            '0px 5px 16px -5px rgba(22, 23, 24, 0.35), 0px 5px 10px -7px rgba(22, 23, 24, 0.2)',
          opacity: '1',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$primary500, 0 0 0 1px $colors$primary500',
        },
      },
    },
  },
})

export default Card

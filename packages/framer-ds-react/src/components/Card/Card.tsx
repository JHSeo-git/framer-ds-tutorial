import { Box } from '../Box'
import { styled } from '@src/lib/stitches'
import React from 'react'

export type CardProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof BaseCard>

const Card = ({ children, ...rest }: CardProps) => {
  return <BaseCard {...rest}>{children}</BaseCard>
}

const BaseCard = styled(Box, {
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
  backgroundColor: '$panel',
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
    brd: '$monoA6',
    borderRadius: '$radius8',
    pointerEvents: 'none',
  },

  variants: {
    variant: {
      interactive: {
        '@hover': {
          '&:hover': {
            '&::before': {
              brd: '$monoA8',
            },
          },
          '&:focus, &:focus-visible': {
            '&::before': {
              brdFocus: '$mono8',
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
          boxShadow: '$shadow5',
          opacity: 0,
          transition: 'all 200ms cubic-bezier(0.22, 1, 0.36, 1)',
        },
        '@hover': {
          '&:hover': {
            backgroundColor: '$panel',
            transform: 'translateY(-2px)',
            '&::before': {
              opacity: 1,
            },
          },
          '&:active': {
            transform: 'translateY(0)',
            transition: 'none',
            '&::before': {
              boxShadow: '$shadow4',
              opacity: '1',
            },
          },
          '&:focus, &:focus-visible': {
            brdFocus: '$primary6',
          },
        },
      },
      active: {
        transform: 'translateY(0)',
        transition: 'none',
        '&::before': {
          boxShadow: '$shadow4',
          opacity: '1',
        },
        '&:focus, &:focus-visible': {
          brdFocus: '$primary6',
        },
      },
    },
  },
})

export default Card

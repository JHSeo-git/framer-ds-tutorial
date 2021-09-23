import React, { ElementType } from 'react'
import { styled } from '@src/lib/stitches'

export type TextProps = {
  children: React.ReactNode
  as?: ElementType
} & React.ComponentProps<typeof BaseText>

const Text = ({ children, as, ...rest }: TextProps) => {
  return (
    <BaseText as={as} {...rest}>
      {children}
    </BaseText>
  )
}

const BaseText = styled('span', {
  // Reset
  lineHeight: '$base',
  margin: 0,
  fontWeight: '$normal',
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  // default
  lh: '$tight',

  defaultVariants: {
    size: '$base',
    color: 'grayScale',
  },
  variants: {
    size: {
      h1: {
        fontSize: '$h1',
        fontWeight: 'bold',
        textIndent: '-0.018em',
      },
      h2: {
        fontSize: '$h2',
        fontWeight: 'bold',
        textIndent: '-0.005em',
      },
      h3: {
        fontSize: '$h3',
        fontWeight: 'bold',
      },
      h4: {
        fontSize: '$h4',
        fontWeight: 'bold',
      },
      h5: {
        fontSize: '$h5',
        fontWeight: 'bold',
      },
      h6: {
        fontSize: '$h6',
        fontWeight: 'bold',
      },
      xs: {
        fontSize: '$xs',
      },
      sm: {
        fontSize: '$sm',
      },
      lg: {
        fontSize: '$lg',
      },
      xl: {
        fontSize: '$xl',
      },
      '2xl': {
        fontSize: '$2xl',
        textIndent: '-0.005em',
      },
      '3xl': {
        fontSize: '$3xl',
        textIndent: '-0.011em',
      },
      '4xl': {
        fontSize: '$4xl',
        textIndent: '-0.018em',
      },
      '5xl': {
        fontSize: '$5xl',
        letterSpacing: '$tight',
        textIndent: '-0.020em',
      },
      '6xl': {
        fontSize: '$6xl',
        letterSpacing: '$tight',
        textIndent: '-0.022em',
      },
      '7xl': {
        fontSize: '$7xl',
        letterSpacing: '$tighter',
        textIndent: '-0.024em',
      },
      '8xl': {
        fontSize: '$8xl',
        letterSpacing: '$tighter',
        textIndent: '-0.026em',
      },
      '9xl': {
        fontSize: '$9xl',
        letterSpacing: '$tighter',
        textIndent: '-0.028em',
      },
    },
    color: {
      grayScale: {
        color: '$mono1100',
      },
      primary: {
        color: '$primary1000',
      },
      secondary: {
        color: '$secondary1000',
      },
      teritary: {
        color: '$teritary1000',
      },
      success: {
        color: '$success1000',
      },
      warning: {
        color: '$warning1000',
      },
      error: {
        color: '$error1000',
      },
    },
    gradient: {
      true: {
        // 배경을 위한 설정
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
      },
    },
  },
  compoundVariants: [
    {
      color: 'grayScale',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $mono900, $mono1100)',
      },
    },
    {
      color: 'primary',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $primary1000, $secondary1000)',
      },
    },
    {
      color: 'secondary',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $secondary1000, $teritary1000)',
      },
    },
    {
      color: 'teritary',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $teritary1000, $primary1000)',
      },
    },
    {
      color: 'success',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $success1000, $primary1000)',
      },
    },
    {
      color: 'warning',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $warning1000, $error1000)',
      },
    },
    {
      color: 'error',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $error1000, $warning800)',
      },
    },
  ],
})
export default Text

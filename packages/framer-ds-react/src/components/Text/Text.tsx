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
    size: 'base',
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
      base: {
        fontSize: '$base',
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
        color: '$mono12',
      },
      primary: {
        color: '$primary11',
      },
      secondary: {
        color: '$secondary11',
      },
      teritary: {
        color: '$teritary11',
      },
      success: {
        color: '$success11',
      },
      warning: {
        color: '$warning11',
      },
      error: {
        color: '$error11',
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
        background: 'linear-gradient(to right, $mono10, $mono12)',
      },
    },
    {
      color: 'primary',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $primary11, $secondary11)',
      },
    },
    {
      color: 'secondary',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $secondary11, $teritary11)',
      },
    },
    {
      color: 'teritary',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $teritary11, $primary11)',
      },
    },
    {
      color: 'success',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $success11, $primary11)',
      },
    },
    {
      color: 'warning',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $warning11, $error11)',
      },
    },
    {
      color: 'error',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $error11, $warning11)',
      },
    },
  ],
})
export default Text

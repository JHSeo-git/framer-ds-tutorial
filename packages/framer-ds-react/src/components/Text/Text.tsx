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

  defaultVariants: {
    size: '$base',
    color: 'grayScale',
  },
  variants: {
    size: {
      h1: {
        fontSize: '$h1',
        fontWeight: 'bold',
      },
      h2: {
        fontSize: '$h2',
        fontWeight: 'bold',
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
      },
      '3xl': {
        fontSize: '$3xl',
      },
      '4xl': {
        fontSize: '$4xl',
      },
      '5xl': {
        fontSize: '$5xl',
        letterSpacing: '$tight',
      },
      '6xl': {
        fontSize: '$6xl',
        letterSpacing: '$tight',
      },
      '7xl': {
        fontSize: '$7xl',
        letterSpacing: '$tighter',
      },
      '8xl': {
        fontSize: '$8xl',
        letterSpacing: '$tighter',
      },
      '9xl': {
        fontSize: '$9xl',
        letterSpacing: '$tighter',
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
        background: 'linear-gradient(to right, $mono1000, $mono1100)',
      },
    },
    {
      color: 'primary',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $primary1000, $primary800)',
      },
    },
    {
      color: 'secondary',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $secondary1000, $secondary800)',
      },
    },
    {
      color: 'teritary',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $teritary1000, $teritary800)',
      },
    },
    {
      color: 'success',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $success1000, $success800)',
      },
    },
    {
      color: 'warning',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $warning1000, $warning800)',
      },
    },
    {
      color: 'error',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $error1000, $error800)',
      },
    },
  ],
})
export default Text

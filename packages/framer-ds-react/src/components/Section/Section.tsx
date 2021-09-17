import React from 'react'
import { styled } from '@src/lib/stitches'

export type SectionProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof BaseSection>

const Section = ({ children, ...rest }: SectionProps) => {
  return <BaseSection {...rest}>{children}</BaseSection>
}

const BaseSection = styled('section', {
  // reset
  boxSizing: 'border-box',
  flexShrink: 0,
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },

  defaultVariants: {
    size: 'py-md',
  },
  variants: {
    size: {
      'py-sm': {
        py: '$space15',
      },
      'py-md': {
        py: '$space45',
      },
      'py-lg': {
        py: '$space80',
      },
    },
  },
})

export default Section

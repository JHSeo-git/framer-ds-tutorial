import { styled } from '@src/lib/stitches'
import { motion } from 'framer-motion'
import React from 'react'

export type FlexProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof BaseFlex>

const Flex = ({ children, ...rest }: FlexProps) => {
  return <BaseFlex {...rest}>{children}</BaseFlex>
}

const BaseFlex = styled(motion.div, {
  // reset
  boxSizing: 'border-box',

  // default
  display: 'flex',

  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
    wrap: 'noWrap',
  },
  variants: {
    direction: {
      row: {
        fd: 'row',
      },
      rowReverse: {
        fd: 'row-reverse',
      },
      column: {
        fd: 'column',
      },
      columnReverse: {
        fd: 'column-reverse',
      },
    },
    align: {
      start: {
        ai: 'flex-start',
      },
      center: {
        ai: 'center',
      },
      end: {
        ai: 'flex-end',
      },
      stretch: {
        ai: 'stretch',
      },
      baseline: {
        ai: 'baseline',
      },
    },
    justify: {
      start: {
        jc: 'flex-start',
      },
      center: {
        jc: 'center',
      },
      end: {
        jc: 'flex-end',
      },
      between: {
        jc: 'space-between',
      },
    },
    wrap: {
      noWrap: {
        fw: 'nowrap',
      },
      wrap: {
        fw: 'wrap',
      },
      wrapReverse: {
        fw: 'wrap-reverse',
      },
    },
    gap: {
      sm: {
        gap: '$sm',
      },
      md: {
        gap: '$md',
      },
      lg: {
        gap: '$lg',
      },
      xl: {
        gap: '$xl',
      },
      '2xl': {
        gap: '$2xl',
      },
    },
  },
})
export default Flex

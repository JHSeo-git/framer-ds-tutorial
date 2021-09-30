import React from 'react'
import { styled } from '@src/lib/stitches'
import { Box } from '../Box'

export type GridProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof BaseGrid>

const Grid = ({ children, ...rest }: GridProps) => {
  return <BaseGrid {...rest}>{children}</BaseGrid>
}

const BaseGrid = styled(Box, {
  // reset
  boxSizing: 'border-box',

  // default
  display: 'grid',

  variants: {
    align: {
      start: {
        ai: 'start',
      },
      center: {
        ai: 'center',
      },
      end: {
        ai: 'end',
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
        jc: 'start',
      },
      center: {
        jc: 'center',
      },
      end: {
        jc: 'end',
      },
      between: {
        jc: 'space-between',
      },
    },
    flow: {
      row: {
        gridAutoFlow: 'row',
      },
      column: {
        gridAutoFlow: 'column',
      },
      dense: {
        gridAutoFlow: 'dense',
      },
      rowDense: {
        gridAutoFlow: 'row dense',
      },
      columnDense: {
        gridAutoFlow: 'column dense',
      },
    },
    columns: {
      1: {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    },
    gap: {
      gap5: {
        gap: '$space5',
      },
      gap10: {
        gap: '$space10',
      },
      gap15: {
        gap: '$space15',
      },
      gap20: {
        gap: '$space20',
      },
      gap25: {
        gap: '$space25',
      },
      gap35: {
        gap: '$space35',
      },
      gap45: {
        gap: '$space45',
      },
      gap65: {
        gap: '$space65',
      },
      gap80: {
        gap: '$space80',
      },
    },
    gapX: {
      gap5: {
        columnGap: '$space5',
      },
      gap10: {
        columnGap: '$space10',
      },
      gap15: {
        columnGap: '$space15',
      },
      gap20: {
        columnGap: '$space20',
      },
      gap25: {
        columnGap: '$space25',
      },
      gap35: {
        columnGap: '$space35',
      },
      gap45: {
        columnGap: '$space45',
      },
      gap65: {
        columnGap: '$space65',
      },
      gap80: {
        columnGap: '$space80',
      },
    },
    gapY: {
      gap5: {
        rowGap: '$space5',
      },
      gap10: {
        rowGap: '$space10',
      },
      gap15: {
        rowGap: '$space15',
      },
      gap20: {
        rowGap: '$space20',
      },
      gap25: {
        rowGap: '$space25',
      },
      gap35: {
        rowGap: '$space35',
      },
      gap45: {
        rowGap: '$space45',
      },
      gap65: {
        rowGap: '$space65',
      },
      gap80: {
        rowGap: '$space80',
      },
    },
  },
})
export default Grid

import { styled } from '@src/lib/stitches'
import React from 'react'

export type CodeProps = {
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<typeof BaseCode>

const Code = React.forwardRef<React.ElementRef<typeof BaseCode>, CodeProps>(
  ({ children, ...rest }, forwardedRef) => {
    return (
      <BaseCode ref={forwardedRef} {...rest}>
        {children}
      </BaseCode>
    )
  },
)

const BaseCode = styled('code', {
  fontFamily: '$mono',
  fontSize: '$base',
  whiteSpace: 'nowrap',
  p: '0.25rem',
  br: '$radius4',

  defaultVariants: {
    variant: 'primary',
  },
  variants: {
    variant: {
      grayScale: {
        bc: '$mono3',
        color: '$mono11',
      },
      primary: {
        bc: '$primary3',
        color: '$primary11',
      },
    },
  },
})
export default Code

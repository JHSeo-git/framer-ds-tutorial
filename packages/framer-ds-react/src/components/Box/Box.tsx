import React, { ElementType } from 'react'
import { styled } from '@src/lib/stitches'
import { motion } from 'framer-motion'
import { motionBoxAsComponent } from '@src/lib/motions'

type BoxProps = {
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<typeof BaseBox> &
  React.ComponentPropsWithoutRef<typeof motion.div> & {
    as?: ElementType
  }

const Box = React.forwardRef<React.ElementRef<typeof BaseBox>, BoxProps>(
  ({ children, animate, variants, ...rest }, forwardedRef) => {
    if (animate && variants) {
      const { as, ...omittedReest } = rest
      return (
        <BaseBox
          ref={forwardedRef}
          as={motionBoxAsComponent(as)}
          {...omittedReest}
        >
          {children}
        </BaseBox>
      )
    }

    return (
      <BaseBox ref={forwardedRef} {...rest}>
        {children}
      </BaseBox>
    )
  },
)

const BaseBox = styled('div', {
  boxSizing: 'border-box',
})

export default Box

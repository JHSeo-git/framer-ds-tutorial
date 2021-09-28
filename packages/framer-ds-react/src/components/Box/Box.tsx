import React, { ElementType } from 'react'
import { motion } from 'framer-motion'
import { styled } from '@src/lib/stitches'
import { motionBoxAsComponent } from '@src/lib/motions/utils'

type BoxProps = {
  children?: React.ReactNode
} & React.ComponentPropsWithoutRef<typeof BaseBox> &
  React.ComponentPropsWithoutRef<typeof motion.div> & {
    as?: ElementType
  }

const Box = React.forwardRef<React.ElementRef<typeof BaseBox>, BoxProps>(
  ({ children, animate, variants, ...rest }, forwardedRef) => {
    if (animate && variants) {
      const { as, ...omitted } = rest
      return (
        <BaseBox
          ref={forwardedRef}
          animate={animate}
          variants={variants}
          as={motionBoxAsComponent(as)}
          {...omitted}
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

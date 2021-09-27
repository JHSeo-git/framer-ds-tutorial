import React, { ElementType } from 'react'
import { styled } from '@src/lib/stitches'
import { motion } from 'framer-motion'
import { motionBoxAsComponent } from '@src/lib/motions'

type BoxProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof BaseBox> &
  React.ComponentProps<typeof motion.div> & {
    as?: ElementType
  }

const Box = ({ children, animate, variants, ...rest }: BoxProps) => {
  if (animate && variants) {
    const { as, ...omittedReest } = rest
    return (
      <BaseBox as={motionBoxAsComponent(as)} {...omittedReest}>
        {children}
      </BaseBox>
    )
  }

  return <BaseBox {...rest}>{children}</BaseBox>
}

const BaseBox = styled('div', {
  boxSizing: 'border-box',
})

export default Box

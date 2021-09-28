import { createDomMotionComponent, motion } from 'framer-motion'
import { ElementType } from 'react'

function isAsMotionBox(as: any): as is AsMotionBox {
  return as !== undefined
}
export type AsMotionBox = 'div' | 'ul' | 'li' | 'nav' | 'a'
export const motionBoxAsComponent = (as: ElementType | undefined) => {
  if (isAsMotionBox(as)) {
    return createDomMotionComponent(as)
  }
  return motion.div
}

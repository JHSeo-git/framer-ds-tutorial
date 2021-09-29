import { createDomMotionComponent, motion } from 'framer-motion'
import { ElementType } from 'react'

function isAsMotionBox(as: any): as is AsMotionBox {
  return as !== undefined
}
export type AsMotionBox =
  | 'div'
  | 'aside'
  | 'section'
  | 'article'
  | 'main'
  | 'header'
  | 'footer'
  | 'ol'
  | 'ul'
  | 'li'
  | 'nav'
  | 'span'
  | 'a'
export const motionBoxAsComponent = (as: ElementType | undefined) => {
  if (isAsMotionBox(as)) {
    return createDomMotionComponent(as)
  }
  return motion.div
}

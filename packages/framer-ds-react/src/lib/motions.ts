import { motion, TargetAndTransition, VariantLabels } from 'framer-motion'
import { ElementType } from 'react'

export type ButtonMotion = 'scale' | 'rotate'
export type ButtonWhileMotion = {
  whileDrag?: VariantLabels | TargetAndTransition
  whileHover?: VariantLabels | TargetAndTransition
  whileTap?: VariantLabels | TargetAndTransition
  whileFocus?: VariantLabels | TargetAndTransition
}

export const buttonWhileMotion = (
  buttonMotion: ButtonMotion,
): ButtonWhileMotion | undefined => {
  let whileMotion: ButtonWhileMotion | undefined
  switch (buttonMotion) {
    case 'scale': {
      whileMotion = {
        whileHover: {
          scale: 1.1,
        },
        whileTap: {
          scale: 0.9,
        },
      }
      break
    }
    case 'rotate': {
      whileMotion = {
        whileHover: {
          rotate: 90,
        },
        whileTap: {
          rotate: -90,
          borderRadius: '50%',
        },
      }
      break
    }
  }

  return whileMotion
}

function isAsMotionBox(as: any): as is AsMotionBox {
  return as !== undefined
}
export type AsMotionBox = 'div' | 'ul' | 'li' | 'nav' | 'a'
export const motionBoxAsComponent = (as: ElementType | undefined) => {
  if (isAsMotionBox(as)) {
    if (as === 'ul') {
      return motion.ul
    } else if (as === 'li') {
      return motion.li
    } else if (as === 'nav') {
      return motion.nav
    } else if (as === 'a') {
      return motion.a
    }
  }
  return motion.div
}

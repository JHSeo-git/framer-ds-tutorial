import { TargetAndTransition, VariantLabels } from 'framer-motion'

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

import React from 'react'
import { styled } from '@src/lib/stitches'

export type PreProps = {
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<typeof BasePre>

const Pre = React.forwardRef<React.ElementRef<typeof BasePre>, PreProps>(
  ({ children, ...rest }, forwardedRef) => {
    return (
      <BasePre ref={forwardedRef} {...rest}>
        {children}
      </BasePre>
    )
  },
)

const BasePre = styled('pre', {
  $$background: '$colors$loContrast',
  $$text: '$colors$hiContrast',
  $$outline: 'inset 0 0 0 1px $colors$mono6',
  $$syntax1: '$colors$mono11',
  $$syntax2: '$colors$secondary11',
  $$syntax3: '$colors$teritary11',
  $$comment: '$colors$mono10',
  $$removed: '$colors$error11',
  $$added: '$colors$success11',
  $$lineNumbers: '$colors$teritary5',
  $$fadedLines: '$colors$mono10',
  $$highlightedLineBg: '$colors$primary3',
  $$highlightedWord1Bg: '$colors$primary4',
  $$highlightedWord1BgActive: '$colors$primary6',
  $$highlightedWord1Text: '$colors$primary11',
  $$highlightedWord2Bg: '$colors$error3',
  $$highlightedWord2BgActive: '$colors$error5',
  $$highlightedWord2Text: '$colors$error11',
  $$highlightedWord3Bg: '$colors$success3',
  $$highlightedWord3BgActive: '$colors$success5',
  $$highlightedWord3Text: '$colors$success11',

  // default
  boxSizing: 'border-box',
  borderRadius: '$radius8',
  p: '$space20 $space25',
  overflow: 'auto',
  fontFamily: '$mono',
  fontSize: '$base',
  lineHeight: '1',
  whiteSpace: 'pre',
  position: 'relative',
  bc: '$$background',
  color: '$$text',
  boxShadow: '$$outline',

  '& > code': {
    display: 'block',
  },

  '.token.parameter': {
    color: '$$text',
  },

  '.token.tag, .token.class-name, .token.selector, .token.selector .class, .token.function':
    {
      color: '$$syntax1',
    },

  '.token.attr-value, .token.class, .token.string, .token.number, .token.unit, .token.color':
    {
      color: '$$syntax2',
    },

  '.token.attr-name, .token.keyword, .token.rule, .token.operator, .token.pseudo-class, .token.important':
    {
      color: '$$syntax3',
    },

  '.token.punctuation, .token.module, .token.property': {
    color: '$$syntax4',
  },

  '.token.comment': {
    color: '$$comment',
  },

  '.token.atapply .token:not(.rule):not(.important)': {
    color: 'inherit',
  },

  '.language-shell .token:not(.comment)': {
    color: 'inherit',
  },

  '.language-css .token.function': {
    color: 'inherit',
  },

  '.token.deleted:not(.prefix), .token.inserted:not(.prefix)': {
    display: 'block',
    px: '$space20',
    mx: '-20px',
  },

  '.token.deleted:not(.prefix)': {
    color: '$$removed',
  },

  '.token.inserted:not(.prefix)': {
    color: '$$added',
  },

  '.token.deleted.prefix, .token.inserted.prefix': {
    userSelect: 'none',
  },

  // Styles for highlighted word
  '.highlight-word': {
    $$bgAndShadow: '$$highlightedWord1Bg',
    $$xOffset: '0px',
    color: '$$highlightedWord1Text',
    backgroundColor: '$$bgAndShadow',
    display: 'inline-block',
    boxShadow: '$$xOffset 0 0 0 $$bgAndShadow, -$$xOffset 0 0 0 $$bgAndShadow',
    borderRadius: '2px',

    // reset the color for tokens inside highlighted words
    '.token': {
      color: 'inherit',
    },

    '&.on': {
      $$bgAndShadow: '$$highlightedWord1BgActive',
      transition: 'all 100ms ease',
      cursor: 'pointer',
    },
  },

  '.token.deleted .highlight-word': {
    $$bgAndShadow: '$$highlightedWord2Bg',
    color: '$$highlightedWord2Text',

    '&.on': {
      $$bgAndShadow: '$$highlightedWord2BgActive',
    },
  },

  '.token.inserted .highlight-word': {
    $$bgAndShadow: '$$highlightedWord3Bg',
    color: '$$highlightedWord3Text',

    '&.on': {
      $$bgAndShadow: '$$highlightedWord3BgActive',
    },
  },

  // Line numbers
  '&[data-line-numbers=true]': {
    '.highlight-line': {
      position: 'relative',
      pl: '$space20',

      '&::before': {
        content: 'attr(data-line)',
        position: 'absolute',
        left: -5,
        top: 0,
        color: '$$lineNumbers',
      },
    },
    '&[data-invert-line-highlight=true]': {
      '.highlight-line': {
        '&::before': {
          left: 10,
        },
      },
    },
  },

  // Styles for highlighted lines
  '&[data-invert-line-highlight=false] .highlight-line': {
    '&, *': {
      transition: 'color 150ms ease',
    },
    '&[data-highlighted=false]': {
      '&, *': {
        color: '$$fadedLines',
      },
    },
  },

  // data-invert-line-highlight
  // Styles for inverted line highlighting
  '&[data-invert-line-highlight=true] .highlight-line': {
    mx: '-$space25',
    px: '$space25',
    '&[data-highlighted=true]': {
      bc: '$$highlightedLineBg',
    },
  },

  // Typewriter styles
  '.typewriter': {
    opacity: 0,
  },

  defaultVariants: {
    variant: 'primary',
  },
  variants: {
    variant: {
      primary: {
        $$background: '$colors$primary2',
        $$text: '$colors$primary11',
        $$outline: 'inset 0 0 0 1px $colors$primary4',
        $$syntax1: '$colors$mono11',
        $$syntax2: '$colors$success11',
        $$comment: '$colors$mono9',
        $$fadedLines: '$colors$monoA8',
      },
      secondary: {
        $$background: '$colors$secondary2',
        $$text: '$colors$secondary11',
        $$outline: 'inset 0 0 0 1px $colors$secondary4',
        $$syntax1: '$colors$mono11',
        $$syntax2: '$colors$success11',
        $$comment: '$colors$mono9',
        $$fadedLines: '$colors$monoA8',
      },
      teritary: {
        $$background: '$colors$teritary2',
        $$text: '$colors$teritary11',
        $$outline: 'inset 0 0 0 1px $colors$teritary4',
        $$syntax1: '$colors$mono11',
        $$syntax2: '$colors$success11',
        $$comment: '$colors$mono9',
        $$fadedLines: '$colors$monoA8',
      },
      // mono: {
      //   $$background: theme.colors.mono12.value,
      //   $$text: theme.colors.gray5.value,
      //   $$outline: 'none',
      //   $$syntax1: theme.colors.yellow7.value,
      //   $$syntax2: theme.colors.secondary8.value,
      //   $$syntax3: theme.colors.yellow7.value,
      //   $$syntax4: theme.colors.yellow7.value,
      //   $$comment: theme.colors.mono10.value,
      //   $$removed: '$colors$error9',
      //   $$added: '$colors$success9',
      //   $$lineNumbers: 'hsl(210 37% 35%)',
      //   $$fadedLines: theme.colors.mono11.value,
      //   $$highlightedWord1Bg: '$colors$indigo12',
      //   $$highlightedWord1BgActive: '$colors$indigo11',
      //   $$highlightedWord1Text: '$colors$indigo4',
      //   $$highlightedWord2Bg: '$colors$error12',
      //   $$highlightedWord2BgActive: '$colors$error11',
      //   $$highlightedWord2Text: '$colors$error4',
      //   $$highlightedWord3Bg: '$colors$success12',
      //   $$highlightedWord3BgActive: '$colors$success11',
      //   $$highlightedWord3Text: '$colors$success4',
      // },
    },
  },
})
export default Pre

import React, { ElementType } from 'react'
import { Text } from '../Text'

const DEFAULT_TAG = 'h1'

type TextProps = React.ComponentProps<typeof Text>
type HeadingSizeVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type HeadingVariants = { size?: HeadingSizeVariants } & Omit<TextProps, 'size'>
type HeadingProps = React.ComponentPropsWithoutRef<typeof DEFAULT_TAG> &
  HeadingVariants & { as?: ElementType }

const Heading = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  HeadingProps
>((props, forwardedRef) => {
  const { size = 'h1', as, css, ...rest } = props
  const textSize: Record<HeadingSizeVariants, TextProps['size']> = {
    h1: { '@initial': 'h1', '@lg': '6xl' },
    h2: { '@initial': 'h2', '@lg': '4xl' },
    h3: { '@initial': 'h3', '@lg': '2xl' },
    h4: { '@initial': 'h4', '@lg': 'lg' },
    h5: { '@initial': 'h5' },
    h6: { '@initial': 'h6' },
  }
  const defaultAs = as ?? size
  return (
    <Text
      as={defaultAs}
      {...rest}
      ref={forwardedRef}
      size={textSize[size]}
      css={{
        fontVariantNumeric: 'proportional-nums',
        ...css,
      }}
    />
  )
})

export default Heading

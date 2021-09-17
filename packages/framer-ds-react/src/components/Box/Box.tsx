import React from 'react'
import { styled } from '@src/lib/stitches'

export type BoxProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof BaseBox>

const Box = ({ children, ...rest }: BoxProps) => {
  return <BaseBox {...rest}>{children}</BaseBox>
}

const BaseBox = styled('div', {
  boxSizing: 'border-box',
})

export default Box

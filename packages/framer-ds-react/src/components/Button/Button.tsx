import React from 'react'

export type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  )
}

export default Button

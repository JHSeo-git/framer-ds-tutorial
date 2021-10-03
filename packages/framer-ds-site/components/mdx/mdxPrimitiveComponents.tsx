import NextLink from 'next/link'
import * as FDS from '@framerds/react'
import { ComponentMap } from 'mdx-bundler/client'

const mdxPrimitiveComponents: ComponentMap = {
  // HEADING
  h1: ({ children, ...props }) => {
    return (
      <FDS.Heading {...props} size="h1" css={{ mb: '$space20' }}>
        {children}
      </FDS.Heading>
    )
  },
  h2: ({ children, ...props }) => {
    return (
      <FDS.Heading {...props} size="h2" css={{ mb: '$space20' }}>
        {children}
      </FDS.Heading>
    )
  },
  h3: ({ children, ...props }) => {
    return (
      <FDS.Heading {...props} size="h3" css={{ mb: '$space20' }}>
        {children}
      </FDS.Heading>
    )
  },
  h4: ({ children, ...props }) => {
    return (
      <FDS.Heading {...props} size="h4" css={{ mb: '$space20' }}>
        {children}
      </FDS.Heading>
    )
  },
  h5: ({ children, ...props }) => {
    return (
      <FDS.Heading {...props} size="h5" css={{ mb: '$space15' }}>
        {children}
      </FDS.Heading>
    )
  },
  h6: ({ children, ...props }) => {
    return (
      <FDS.Heading {...props} size="h6" css={{ mb: '$space15' }}>
        {children}
      </FDS.Heading>
    )
  },

  // TEXT
  p: ({ children, ...props }) => {
    return (
      <FDS.Text {...props} as="p" css={{ mb: '$space15' }}>
        {children}
      </FDS.Text>
    )
  },
  strong: ({ children, ...props }) => {
    return (
      <FDS.Text
        {...props}
        as="strong"
        css={{
          display: 'inline-block',
          fontWeight: '$bold',
        }}
      >
        {children}
      </FDS.Text>
    )
  },
  span: ({ children, ...props }) => {
    return (
      <FDS.Text {...props} as="span">
        {children}
      </FDS.Text>
    )
  },

  // Anchor
  a: ({
    href = '',
    children,
    ...props
  }: Omit<React.ComponentProps<typeof FDS.Link>, 'children' | 'href'> & {
    children?: React.ReactNode
    href?: string
  }) => {
    if (href.startsWith('http')) {
      return (
        <FDS.Link
          href={href}
          variant="blueLink"
          shape="pill"
          target="_blank"
          rel="noopener"
          css={{ fontSize: 'inherit' }}
          {...props}
        >
          {children}
        </FDS.Link>
      )
    }
    return (
      <NextLink href={href} passHref>
        <FDS.Link
          shape="pill"
          variant="blueLink"
          css={{ fontSize: 'inherit' }}
          {...props}
        >
          {children}
        </FDS.Link>
      </NextLink>
    )
  },

  // HR
  hr: (props) => {
    return (
      <FDS.Separator
        direction="horizontal"
        size="max"
        {...props}
        css={{ my: '$space45', mx: '$space20' }}
      ></FDS.Separator>
    )
  },
  // ul
  // ol
  // li
  // img
  // blockquote
  // pre
  // code
  // Kbd
  //
}

export default mdxPrimitiveComponents

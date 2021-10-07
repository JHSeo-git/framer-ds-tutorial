import NextLink from 'next/link'
import Image from 'next/image'
import * as FDS from '@framerds/react'
import { ComponentMap } from 'mdx-bundler/client'
import React from 'react'
import CodeBlock from '@components/CodeBlock'

const mdxPrimitiveComponents: ComponentMap = {
  // HEADING
  h1: ({ children, ...props }) => {
    return (
      <FDS.Heading
        {...props}
        size="h1"
        css={{ mt: '$space25', mb: '$space20' }}
      >
        {children}
      </FDS.Heading>
    )
  },
  h2: ({ children, ...props }) => {
    return (
      <FDS.Heading
        {...props}
        size="h2"
        css={{ mt: '$space25', mb: '$space20' }}
      >
        {children}
      </FDS.Heading>
    )
  },
  h3: ({ children, ...props }) => {
    return (
      <FDS.Heading
        {...props}
        size="h3"
        css={{ mt: '$space25', mb: '$space20' }}
      >
        {children}
      </FDS.Heading>
    )
  },
  h4: ({ children, ...props }) => {
    return (
      <FDS.Heading
        {...props}
        size="h4"
        css={{ mt: '$space25', mb: '$space20' }}
      >
        {children}
      </FDS.Heading>
    )
  },
  h5: ({ children, ...props }) => {
    return (
      <FDS.Heading
        {...props}
        size="h5"
        css={{ mt: '$space20', mb: '$space15' }}
      >
        {children}
      </FDS.Heading>
    )
  },
  h6: ({ children, ...props }) => {
    return (
      <FDS.Heading
        {...props}
        size="h6"
        css={{ mt: '$space20', mb: '$space15' }}
      >
        {children}
      </FDS.Heading>
    )
  },

  // TEXT
  p: ({ children, ...props }) => {
    return (
      <FDS.Text
        {...props}
        as="p"
        css={{ position: 'relative', mt: '$space15', mb: '$space15' }}
      >
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
      <FDS.Text
        {...props}
        as="span"
        css={{
          display: 'inline',
          fontSize: 'inherit',
          lineHeight: '1.5',
        }}
      >
        {children}
      </FDS.Text>
    )
  },

  // Anchor
  a: ({ href = '', children, ...props }: React.ComponentPropsWithRef<'a'>) => {
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

  // hr
  hr: (props) => {
    return (
      <FDS.Separator
        direction="horizontal"
        size="max"
        css={{
          my: '$space45',
          bc: '$primary7',
        }}
        {...props}
      />
    )
  },

  // ul
  ul: ({ children, ...props }) => {
    return (
      <FDS.Box
        as="ul"
        css={{
          mt: '$space10',
          mb: '$space20',
          color: '$hiContrast',
        }}
        {...props}
      >
        {children}
      </FDS.Box>
    )
  },
  // ol
  ol: ({ children, ...props }) => {
    return (
      <FDS.Box
        as="ol"
        css={{
          mt: '$space10',
          mb: '$space20',
          color: '$hiContrast',
        }}
        {...props}
      >
        {children}
      </FDS.Box>
    )
  },
  // li
  li: ({ children, ...props }) => {
    return (
      <FDS.Box as="li" css={{ my: '$space5' }}>
        <FDS.Text as="div" {...props}>
          {children}
        </FDS.Text>
      </FDS.Box>
    )
  },

  // img
  img: ({
    src = '',
    alt = '',
    placeholder,
    ...props
  }: React.ComponentPropsWithRef<'img'>) => {
    if (src.startsWith('http')) {
      return (
        <FDS.Flex
          justify="center"
          css={{
            my: '$space35',
            mx: 'auto',
          }}
        >
          <FDS.Image
            src={src}
            alt={alt}
            placeholder={placeholder}
            css={{
              maxWidth: '100%',
              verticalAlign: 'middle',
            }}
            {...props}
          />
        </FDS.Flex>
      )
    }
    return (
      <FDS.Flex
        justify="center"
        css={{
          position: 'relative',
          my: '$space35',
          mx: 'auto',
        }}
      >
        <Image
          src={src}
          alt={alt}
          width="100%"
          height="100%"
          objectFit="contain"
          placeholder="empty"
          {...props}
        />
      </FDS.Flex>
    )
  },

  // blockquote
  blockquote: ({ children, ...props }) => {
    return (
      <FDS.Box
        as="section"
        css={{
          my: '$space35',
          pl: '$space25',
          borderLeft: '0.25rem solid $secondary8',
          bc: '$secondary2',
          color: '$mono12',
          '& *': {
            my: 0,
          },
          '& p': {
            py: '$space15',
            color: '$mono12',
          },
        }}
        {...props}
      >
        {children}
      </FDS.Box>
    )
  },

  // pre
  pre: ({ children }) => <>{children}</>,

  // code
  code: ({ children, ...props }) => {
    if (!Object.keys(props).includes('className')) {
      return (
        <FDS.Code {...props} css={{ whiteSpace: 'break-spaces' }}>
          {children}
        </FDS.Code>
      )
    }
    return <CodeBlock {...(props as any)}>{children}</CodeBlock>
  },
}

export default mdxPrimitiveComponents

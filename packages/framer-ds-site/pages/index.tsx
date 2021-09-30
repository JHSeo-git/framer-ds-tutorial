import React from 'react'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import Layout from '@components/Layout'
import {
  Box,
  Card,
  Container,
  Grid,
  Heading,
  Section,
  Text,
} from '@framerds/react'

const menus = [
  {
    href: '/design-system',
    title: 'Design System',
    description: 'All components of design system.',
  },
  {
    href: '/colors',
    title: 'Color System',
    description: 'A color system of design system.',
  },
  {
    href: '/docs',
    title: 'Documentation',
    description: 'A complete documentaion of design system.',
  },
  {
    href: '/',
    title: 'Empty',
    description: 'Coming soon.',
  },
]

const Home: NextPage = () => {
  return (
    <Layout>
      <Section
        css={{
          pt: '$space35',
          '@lg': {
            pt: '$space45',
          },
        }}
      >
        <Container>
          <Heading
            size="h1"
            css={{
              mb: '$space15',
              '@lg': {
                ta: 'center',
              },
            }}
          >
            FDX for React
          </Heading>
          <Text
            as="p"
            size="lg"
            color="grayScale"
            css={{
              mb: '$space45',
              '@lg': {
                ta: 'center',
                mb: '$space65',
              },
            }}
          >
            A suite of components, colors for building React Web Apps.
          </Text>
          <Grid
            gap="gap25"
            columns={{
              '@lg': '2',
            }}
            css={{
              mx: '-$space20',
              '@lg': {
                mx: '0',
              },
            }}
          >
            {menus.map((menu) => (
              <NextLink key={menu.href} href={menu.href} passHref>
                <Card as="a" variant="ghost">
                  <Box css={{ p: '$space20' }}>
                    <Heading size="h3" css={{ mb: '$space10' }}>
                      {menu.title}
                    </Heading>
                    <Text as="p" css={{ color: '$mono11' }}>
                      {menu.description}
                    </Text>
                  </Box>
                </Card>
              </NextLink>
            ))}
          </Grid>
        </Container>
      </Section>
    </Layout>
  )
}

export default Home

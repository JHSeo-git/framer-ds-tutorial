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
import { appMenusRoutes } from '@lib/config/appMenusRoutes'

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
            FDS for React
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
            {appMenusRoutes.map((menu) => (
              <NextLink key={menu.slug} href={menu.slug} passHref>
                <Card as="a" variant="ghost">
                  <Box css={{ p: '$space20' }}>
                    <Heading
                      size="h3"
                      css={{
                        mb: '$space10',
                        color: menu.draft ? '$mono9' : undefined,
                      }}
                    >
                      {menu.title}
                    </Heading>
                    <Text
                      as="p"
                      css={{
                        color: menu.draft ? '$mono9' : '$mono11',
                      }}
                    >
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

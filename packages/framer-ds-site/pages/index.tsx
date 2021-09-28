import React from 'react'
import type { NextPage } from 'next'
import {
  Box,
  Button,
  Container,
  Card,
  Flex,
  Section,
  Text,
  Heading,
  Image,
} from '@framerds/react'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <Heading
            size="h1"
            color="grayScale"
            css={{
              mb: '$space20',
            }}
          >
            Button
          </Heading>
          <Flex gap="xl" wrap="wrap" css={{ mb: '$space45' }}>
            <Button kind="grayScale" size="small" shape="round">
              Small
            </Button>
            <Button kind="grayScale" shape="round">
              Normal
            </Button>
            <Button kind="grayScale" size="large" shape="round">
              Large
            </Button>
          </Flex>
          <Flex gap="xl" wrap="wrap" css={{ mb: '$space45' }}>
            <Button kind="grayScale" shape="round">
              Round
            </Button>
            <Button kind="grayScale" shape="pill">
              Pill
            </Button>
            <Button kind="grayScale" shape="circle">
              Circle
            </Button>
          </Flex>
          <Flex gap="xl" wrap="wrap" css={{ mb: '$space45' }}>
            <Button kind="grayScale" disabled shape="round">
              Disabled
            </Button>
            <Button kind="grayScale" state="active" shape="round">
              Active
            </Button>
            <Button kind="grayScale" disabled state="waiting" shape="round">
              Waiting
            </Button>
          </Flex>
          <Flex gap="xl" wrap="wrap" css={{ mb: '$space45' }}>
            <Button kind="grayScale" shape="round">
              Base
            </Button>
            <Button kind="primary" shape="round">
              Primary
            </Button>
            <Button kind="secondary" shape="round">
              Secondary
            </Button>
            <Button kind="teritary" shape="round">
              Teritary
            </Button>
          </Flex>
          <Flex gap="xl" wrap="wrap" css={{ mb: '$space45' }}>
            <Button kind="grayScale" shape="round">
              Base
            </Button>
            <Button kind="success" shape="round">
              Success
            </Button>
            <Button kind="warning" shape="round">
              Warning
            </Button>
            <Button kind="error" shape="round">
              Error
            </Button>
          </Flex>
          <Flex gap="xl" wrap="wrap" css={{ mb: '$space45' }}>
            <Button kind="grayScale" shape="round" ghost>
              Ghost
            </Button>
            <Button kind="primary" shape="round" ghost>
              Primary
            </Button>
            <Button kind="secondary" shape="round" ghost>
              Secondary
            </Button>
            <Button kind="teritary" shape="round" ghost>
              Teritary
            </Button>
          </Flex>
          <Flex gap="xl" wrap="wrap" css={{ mb: '$space45' }}>
            <Button kind="grayScale" shape="round" ghost>
              Ghost
            </Button>
            <Button kind="success" shape="round" ghost>
              Success
            </Button>
            <Button kind="warning" shape="round" ghost>
              Warning
            </Button>
            <Button kind="error" shape="round" ghost>
              Error
            </Button>
          </Flex>
          <Box
            css={{
              position: 'relative',
              mb: '$space45',
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1632560354926-21886c0e811c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMjU4OTcwOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
              alt="darken unsplash"
            />
            <Box
              css={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                m: '$space25',
              }}
            >
              <Button kind="transparentWhite" shape="round">
                Transparent
              </Button>
            </Box>
          </Box>
          <Box
            css={{
              position: 'relative',
              mb: '$space45',
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1632338528496-877ff975d1a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMjU5MDI2MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
              alt="darken unsplash"
            />
            <Box
              css={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                m: '$space25',
              }}
            >
              <Button kind="transparentBlack" shape="round">
                Transparent
              </Button>
            </Box>
          </Box>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading
            size="h1"
            color="grayScale"
            css={{
              mb: '$space20',
              WebkitBackgroundClip: 'text',
            }}
          >
            Card
          </Heading>
          <Flex gap="md">
            <Card variant="active" css={{ padding: '$space20' }}>
              Card Active
            </Card>
            <Card variant="ghost" css={{ padding: '$space20' }}>
              Card Ghost
            </Card>
            <Card variant="interactive" css={{ padding: '$space20' }}>
              Card Interactive
            </Card>
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading
            size="h1"
            color="grayScale"
            css={{
              mb: '$space20',
            }}
          >
            Text
          </Heading>
          <Flex direction="column" gap="xl" css={{ mb: '$space20' }}>
            <Heading size="h1" css={{ color: '$mono900' }}>
              Heading 1
            </Heading>
            <Heading size="h2" css={{ color: '$mono900' }}>
              Heading 2
            </Heading>
            <Heading size="h3" css={{ color: '$mono900' }}>
              Heading 3
            </Heading>
            <Heading size="h4" css={{ color: '$mono900' }}>
              Heading 4
            </Heading>
            <Heading size="h5" css={{ color: '$mono900' }}>
              Heading 5
            </Heading>
            <Heading size="h6" css={{ color: '$mono900' }}>
              Heading 6
            </Heading>
          </Flex>
          <Flex direction="column" gap="xl" css={{ mb: '$space20' }}>
            <Text
              as="h2"
              size="5xl"
              color="primary"
              gradient
              css={{
                WebkitBackgroundClip: 'text',
              }}
            >
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text
              as="h2"
              size="5xl"
              color="secondary"
              gradient
              css={{
                WebkitBackgroundClip: 'text',
              }}
            >
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text
              as="h2"
              size="5xl"
              color="teritary"
              gradient
              css={{
                WebkitBackgroundClip: 'text',
              }}
            >
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text
              as="h2"
              size="5xl"
              color="success"
              gradient
              css={{
                WebkitBackgroundClip: 'text',
              }}
            >
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text
              as="h2"
              size="5xl"
              color="warning"
              gradient
              css={{
                WebkitBackgroundClip: 'text',
              }}
            >
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text
              as="h2"
              size="5xl"
              color="error"
              gradient
              css={{
                WebkitBackgroundClip: 'text',
              }}
            >
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
          </Flex>
          <Flex direction="column" gap="lg">
            <Text as="p" color="grayScale">
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text as="p" color="primary">
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text as="p" color="secondary">
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text as="p" color="teritary">
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text as="p" color="success">
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text as="p" color="warning">
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text as="p" color="error">
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
          </Flex>
        </Container>
      </Section>
    </Layout>
  )
}

export default Home

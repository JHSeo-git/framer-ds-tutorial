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
} from '@framerds/react'

const Home: NextPage = () => {
  return (
    <Box css={{ bc: '$loContrast' }}>
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
          <Flex gap="xl" css={{ mb: '$space20' }}>
            <Button kind="grayScale" size="small" shape="round">
              Button
            </Button>
            <Button kind="grayScale" shape="round">
              Button
            </Button>
            <Button kind="grayScale" size="large" shape="round">
              Button
            </Button>
          </Flex>
          <Flex gap="xl" css={{ mb: '$space20' }}>
            <Button kind="grayScale" shape="round">
              Button
            </Button>
            <Button kind="grayScale" shape="pill">
              Button
            </Button>
            <Button kind="grayScale" shape="circle">
              Button
            </Button>
          </Flex>
          <Flex gap="xl" css={{ mb: '$space20' }}>
            <Button kind="grayScale" disabled shape="round">
              Button
            </Button>
            <Button kind="grayScale" state="active" shape="round">
              Button
            </Button>
            <Button kind="grayScale" state="ghost" shape="round">
              Button
            </Button>
            <Button kind="grayScale" state="waiting" shape="round">
              Button
            </Button>
          </Flex>
          <Flex gap="xl" css={{ mb: '$space20' }}>
            <Button kind="grayScale" size="small" shape="round">
              Button
            </Button>
            <Button kind="primary" size="small" shape="round">
              Primary
            </Button>
            <Button kind="secondary" size="small" shape="round">
              Secondary
            </Button>
            <Button kind="teritary" size="small" shape="round">
              Teritary
            </Button>
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
    </Box>
  )
}

export default Home

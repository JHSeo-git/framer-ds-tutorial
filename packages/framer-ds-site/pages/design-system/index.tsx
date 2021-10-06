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
  Code,
} from '@framerds/react'
import Layout from '@components/Layout'

const DesignSystemPagePage: NextPage = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <Heading
            size="h2"
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
            size="h2"
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
            size="h2"
            color="grayScale"
            css={{
              mb: '$space20',
            }}
          >
            Heading
          </Heading>
          <Flex direction="column" gap="lg" css={{ mb: '$space20' }}>
            <Heading size="h1" css={{ color: '$mono11' }}>
              Heading 1
            </Heading>
            <Heading size="h2" css={{ color: '$mono11' }}>
              Heading 2
            </Heading>
            <Heading size="h3" css={{ color: '$mono11' }}>
              Heading 3
            </Heading>
            <Heading size="h4" css={{ color: '$mono11' }}>
              Heading 4
            </Heading>
            <Heading size="h5" css={{ color: '$mono11' }}>
              Heading 5
            </Heading>
            <Heading size="h6" css={{ color: '$mono11' }}>
              Heading 6
            </Heading>
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading
            size="h2"
            color="grayScale"
            css={{
              mb: '$space20',
            }}
          >
            Text - gradient color
          </Heading>
          <Flex direction="column" gap="lg" css={{ mb: '$space20' }}>
            <Text
              as="h2"
              size="4xl"
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
              size="4xl"
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
              size="4xl"
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
              size="4xl"
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
              size="4xl"
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
              size="4xl"
              color="error"
              gradient
              css={{
                WebkitBackgroundClip: 'text',
              }}
            >
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text
              as="h2"
              size="4xl"
              color="blue"
              gradient
              css={{
                WebkitBackgroundClip: 'text',
              }}
            >
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text
              as="h2"
              size="4xl"
              color="yellow"
              gradient
              css={{
                WebkitBackgroundClip: 'text',
              }}
            >
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading
            size="h2"
            color="grayScale"
            css={{
              mb: '$space20',
            }}
          >
            Text - color
          </Heading>
          <Flex direction="column" gap="lg">
            <Text as="p" size="lg" color="grayScale">
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text as="p" size="lg" color="primary">
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text as="p" size="lg" color="secondary">
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text as="p" size="lg" color="teritary">
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text as="p" size="lg" color="success">
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text as="p" size="lg" color="warning">
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text as="p" size="lg" color="error">
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text as="p" size="lg" color="blue">
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
            <Text as="p" size="lg" color="yellow">
              Code generation, like drinking alcohol, is good in moderation.
            </Text>
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading
            size="h2"
            color="grayScale"
            css={{
              mb: '$space20',
            }}
          >
            Box Shadow
          </Heading>
          <Flex wrap="wrap" gap="xl" css={{ mb: '$space20' }}>
            <Box
              css={{
                bs: '$muiShadow1',
                height: '8rem',
                aspectRatio: 1,
              }}
            />
            <Box
              css={{
                bs: '$muiShadow2',
                height: '8rem',
                aspectRatio: 1,
              }}
            />
            <Box
              css={{
                bs: '$muiShadow3',
                height: '8rem',
                aspectRatio: 1,
              }}
            />
            <Box
              css={{
                bs: '$muiShadow4',
                height: '8rem',
                aspectRatio: 1,
              }}
            />
          </Flex>
          <Flex wrap="wrap" gap="xl">
            <Box
              css={{
                bs: '$shadow4',
                height: '8rem',
                aspectRatio: 1,
              }}
            />
            <Box
              css={{
                bs: '$shadow5',
                height: '8rem',
                aspectRatio: 1,
              }}
            />
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading
            size="h2"
            color="grayScale"
            css={{
              mb: '$space20',
            }}
          >
            Code
          </Heading>
          <Text as="p">
            Inline Code Element is <Code>Inline Code</Code>
          </Text>
        </Container>
      </Section>
    </Layout>
  )
}

export default DesignSystemPagePage

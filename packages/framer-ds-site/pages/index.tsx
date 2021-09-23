import React from 'react'
import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
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
  const { theme, setTheme } = useTheme()
  return (
    <Box css={{ bc: '$loContrast' }}>
      <Section>
        <Container>
          <Heading
            size="h1"
            color="grayScale"
            gradient="true"
            css={{ WebkitBackgroundClip: 'text' }}
          >
            Button
          </Heading>
          <Flex gap="md">
            <Button
              kind="grayScale"
              shape="pill"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              Toggle Theme
            </Button>
            <Button kind="primary" shape="pill">
              Primary
            </Button>
            <Button kind="secondary" shape="pill">
              Secondary
            </Button>
            <Button kind="teritary" shape="pill">
              Teritary
            </Button>
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container>
          <Card variant="ghost" css={{ padding: '$space10' }}>
            Card A
          </Card>
        </Container>
      </Section>
    </Box>
  )
}

export default Home

import React from 'react'
import type { NextPage } from 'next'
import {
  darkThemeClassName,
  Box,
  Button,
  Container,
  Card,
  Flex,
  Section,
} from '../../framer-ds-react'

const Home: NextPage = () => {
  const [theme, setTheme] = React.useState('theme-default')

  React.useEffect(() => {
    document.body.className = ''
    document.body.classList.add(theme)
  }, [theme])
  return (
    <Box css={{ bc: '$loContrast' }}>
      <Section>
        <Container>
          <Flex gap="md">
            <Button
              kind="grayScale"
              shape="pill"
              onClick={() =>
                setTheme(
                  theme === 'theme-default'
                    ? darkThemeClassName
                    : 'theme-default',
                )
              }
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

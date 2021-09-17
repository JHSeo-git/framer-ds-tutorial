import React from 'react'
import type { NextPage } from 'next'
import {
  Button,
  Box,
  Container,
  Section,
  darkThemeClassName,
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
          <Button
            kind="primary"
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
        </Container>
      </Section>
    </Box>
  )
}

export default Home

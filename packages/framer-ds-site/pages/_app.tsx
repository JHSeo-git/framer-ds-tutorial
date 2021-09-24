import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { Box, darkThemeClassName } from '@framerds/react'
import '../styles/globalCss.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: 'light-theme', dark: darkThemeClassName }}
      defaultTheme="system"
    >
      <Head>
        <title>Design System</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Box
        css={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          boxShadow: '0 0 0 1px $mono900',
          zIndex: '$5',
          backgroundColor: '$loContrast',
        }}
      >
        <Header />
      </Box>
      <Box
        css={{
          py: '$space65',
        }}
      >
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  )
}
export default MyApp

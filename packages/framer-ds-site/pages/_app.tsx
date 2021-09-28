import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { darkThemeClassName } from '@framerds/react'

import '../styles/globalCss.css'
import DebugObserver from '../components/DebugObserver'
import { RecoilRoot } from 'recoil'

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
      <RecoilRoot>
        {process.env.NODE_ENV !== 'production' && <DebugObserver />}

        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  )
}
export default MyApp

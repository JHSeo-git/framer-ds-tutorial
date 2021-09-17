import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globalCss.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Design System</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
export default MyApp

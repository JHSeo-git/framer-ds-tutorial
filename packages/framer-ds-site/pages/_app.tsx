import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globalCss.css'
import { Button, darkThemeClassName } from '../../framer-ds-react'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState('theme-default')

  React.useEffect(() => {
    document.body.className = ''
    document.body.classList.add(theme)
  }, [theme])

  return (
    <>
      <Head>
        <title>Design System</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />

      <Button
        kind="primary"
        onClick={() =>
          setTheme(
            theme === 'theme-default' ? darkThemeClassName : 'theme-default',
          )
        }
      >
        Toggle Theme
      </Button>
    </>
  )
}
export default MyApp

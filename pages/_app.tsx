import { AppProps } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Layout from 'atomic-layout'
import theme from '../theme'
import { useEffect, useState } from 'react'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }

  img {
    width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
  }

  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
`

Layout.configure({
  defaultUnit: 'rem',
})

function MyApp({ Component, pageProps }: AppProps) {
  const [isReady, setReady] = useState(false)

  useEffect(() => {
    const isMockReady =
      process.env.NODE_ENV === 'development'
        ? require('../mocks/mocks').worker.start()
        : Promise.resolve()

    isMockReady.then(() => setReady(true))
  }, [])

  if (!isReady) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

import { AppProps } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Layout from 'atomic-layout'
import theme from '../theme'
import { Header } from '../components/Header'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
		background-color: ${({ theme }) => theme.colors.yellow};
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
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { theme, GlobalStyles } from 'components/foundations'
import {
  GlobalHeader,
  GlobalFooter,
  UnsupportedBrowser,
} from 'components/blocks'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Fira+Mono:wght@400;700&display=swap&family=Inconsolata&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <UnsupportedBrowser />
        <GlobalHeader />
        <main>{children}</main>
        <GlobalFooter />
      </ThemeProvider>
    </>
  )
}

export default Layout

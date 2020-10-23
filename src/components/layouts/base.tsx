import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { theme, GlobalStyles } from 'components/foundations'
import { GlobalHeader, GlobalFooter } from 'components/blocks'

const Layout: React.FC = ({ children }) => (
  <>
    <Head>
      <title>Spring Fest 2020_</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Fira+Mono:wght@400;700&display=swap" rel="stylesheet" />
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GlobalHeader />
      <main>
        {children}
      </main>
      <GlobalFooter />
    </ThemeProvider>
  </>
)

export default Layout

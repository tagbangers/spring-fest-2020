import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { theme, GlobalStyles } from 'components/foundations'
import { GlobalHeader, GlobalFooter } from 'components/blocks'

const Layout: React.FC = ({ children }) => {
  const title = 'Spring Fest 2020'
  const keyword = 'Java Spring JSUG'
  const description = 'Spring FrameworkはJavaの代表的なアプリケーションフレームワークであり、世界中の多くのJavaアプリケーションで利用されています。ユーザ間での情報交換・交流の場を提供し、さらなるSpring Frameworkの認知度の向上、普及促進を図るため、本カンファレンスを開催いたします。'
  const url = ''

  return (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="/images/feed.png" />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@jsug" />
      <meta name="twitter:url" content="/images/feed.png" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/feed.png" />
      <link rel="canonical" href={url} />
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
}

export default Layout

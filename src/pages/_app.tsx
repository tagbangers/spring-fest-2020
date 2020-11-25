import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Spring Fest 2020 | springframework.jp</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

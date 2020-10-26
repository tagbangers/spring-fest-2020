import * as React from 'react'
import Head from 'next/head'

import { BaseLayout } from 'components/layouts'
import { Teaser, Intro } from 'components/sections'

const IndexPage = () => {
  const [meta, setMeta] = React.useState({
    title: 'Spring Fest 2020',
    keyword: 'Java Spring JSUG',
    description: 'Spring FrameworkはJavaの代表的なアプリケーションフレームワークであり、世界中の多くのJavaアプリケーションで利用されています。ユーザ間での情報交換・交流の場を提供し、さらなるSpring Frameworkの認知度の向上、普及促進を図るため、本カンファレンスを開催いたします。',
    url: ''
  })

  React.useEffect(() => {
    navigator.userAgent.toLowerCase().indexOf('chrome') > -1
      ? window.console.log.apply(console, [
          '\n %c Made by 🏷 Tagbangers %c %c %c https://tagbangers.co.jp/ %c %c \n',
          'color: #fff; background: #ff0000; padding:5px 0;',
          'background: #131419; padding:5px 0;',
          'background: #131419; padding:5px 0;',
          'color: #fff; background: #1c1c1c; padding:5px 0;',
          'background: #1c1c1c; padding:5px 0;',
          'color: #ff0000; background: #1c1c1c; padding:5px 0;',
        ])
      : window.console &&
        window.console.log('Made by Tagbangers - https://tagbangers.co.jp/')

    setMeta({
      ...meta,
      url: location.origin
    })
  }, [])

  return (
    <BaseLayout>
      <Head>
        <title>{meta.title}</title>
        <meta name="keywords" content={meta.keyword} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={`${meta.url}/images/banner.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={meta.title} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@jsug" />
        <meta name="twitter:url" content={meta.url} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={`${meta.url}/images/banner.png`} />
        <link rel="canonical" href={meta.url} />
      </Head>
      <Teaser />
      <Intro />
    </BaseLayout>
  )
}

export default IndexPage

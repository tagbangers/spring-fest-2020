import * as React from 'react'
import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'

import { BaseLayout } from 'components/layouts'
import { Loader } from 'components/blocks'
import { Teaser, Intro, Goods, TimeTable, Speakers } from 'components/sections'

import { Session, Speaker, mergeSessions } from 'entities/sessions'

const GS =
  'https://script.google.com/macros/s/AKfycbzkcMkU3Fcj5hyMQpMsKhYnLeLtRCtwTMxiQmJuz513p2nlXfw/exec'

interface State {
  loading: boolean
  sessions: Session[]
  speakers: Speaker[]
}

enum ActionType {
  FETCH_STARTED = 'fetchStarted',
  FETCH_SUCCEEDED = 'fetchSucceeded',
  FETCH_FAILED = 'fetchFailed',
}
interface Action {
  type: ActionType
  payload: State
}

const initialState = {
  loading: true,
  sessions: [],
  speakers: [],
}

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'fetchStarted':
      return { ...state, loading: true }
    case 'fetchSucceeded':
      return { ...action.payload, loading: false }
    case 'fetchFailed':
      return { ...action.payload, loading: false }
    default:
      return state
  }
}

const IndexPage = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const [meta, setMeta] = React.useState({
    title: 'Spring Fest 2020',
    keyword: 'Java Spring JSUG',
    description:
      'Spring FrameworkはJavaの代表的なアプリケーションフレームワークであり、世界中の多くのJavaアプリケーションで利用されています。ユーザ間での情報交換・交流の場を提供し、さらなるSpring Frameworkの認知度の向上、普及促進を図るため、本カンファレンスを開催いたします。',
    url: '',
  })

  const fetcher = async () => {
    const resp = await unfetch(GS)
    const json = await resp.json()
    dispatch({ type: ActionType.FETCH_SUCCEEDED, payload: json })
  }

  React.useEffect(() => {
    dispatch({ type: ActionType.FETCH_STARTED, payload: initialState })
    fetcher()
  }, [])

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
      url: location.origin,
    })
  }, [])

  return (
    <BaseLayout>
      <Head>
        <title>{meta.title}</title>
        <link rel="shortcut icon" href="/favicon.png"></link>
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
      {state.loading ? (
        <Loader />
      ) : (
        <>
          <TimeTable sessions={mergeSessions(state.sessions, state.speakers)} />
          <Speakers speakers={state.speakers} />
        </>
      )}
      <Goods />
    </BaseLayout>
  )
}

export default IndexPage

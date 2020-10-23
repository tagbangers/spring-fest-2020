import * as React from 'react'

import { BaseLayout } from 'components/layouts'
import { Teaser, Intro } from 'components/sections'

const IndexPage = () => {
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
  }, [])

  return (
    <BaseLayout>
      <Teaser />
      <Intro />
    </BaseLayout>
  )
}

export default IndexPage

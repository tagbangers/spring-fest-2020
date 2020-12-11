import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  padding: ${p => p.theme.spacing}px ${p => p.theme.spacing * 2}px;
  background-color: ${p => p.theme.colors.warning};
`

const Message = styled.p`
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.font.size.sm};
`

const UnsupportedBrowser: React.FC = () => {
  const [isIE, setIsIE] = React.useState(false)
  React.useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    if (userAgent.match(/(msie|MSIE)/) || userAgent.match(/(T|t)rident/)) {
      setIsIE(true)
    }
  }, [])

  if (!isIE) {
    return null
  }

  return (
    <Container>
      <Message>
        <FontAwesomeIcon icon={faExclamationTriangle} />
        &nbsp;
        このブラウザはサポートされていません。最新のバージョンでご確認ください。
      </Message>
    </Container>
  )
}

export default UnsupportedBrowser

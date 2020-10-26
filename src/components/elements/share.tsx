import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'

interface Props {
  type: 'twitter' | 'facebook'
}

const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 44px;
  margin: ${p => p.theme.spacing(0, 1)};

  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.primary.darker};
  }
`

const Blink = styled.span`
  font-family: ${p => p.theme.font.family.mono};
  display: inline-block;
  opacity: 0.6;
`

const Share: React.FC<Props> = ({type}) => {
  const [href, setHref] = React.useState('')

  const setLocationLazy = () => {
    setTimeout(() => {
      setHref(window.location.origin)
    }, 1000)
  } 

  React.useEffect(() => {
    setLocationLazy()
  }, [])
  
  if (href === '') {
    return (
      <Container>
        <Blink>_</Blink>
      </Container>
    )
  }

  return (
    <Container
      href={
        type === 'twitter'
        ? `https://twitter.com/share?url=${encodeURIComponent(href)}&text=Spring%20Fest%202020&hashtags=jsug`
        : `https://www.facebook.com/share.php?u=${encodeURIComponent(href)}`
      }
      rel="nofollow" 
      target="_blank"
    >{
      type === 'twitter'
        ? <FontAwesomeIcon icon={faTwitter} />
        : <FontAwesomeIcon icon={faFacebookSquare} />
    }
    </Container>
  )
}

export default Share
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
        <Blink>
          {['%', '$', '#', '@'][Math.floor(Math.random() * 5)]}
          {['1', '_', '<', '='][Math.floor(Math.random() * 5)]}
        </Blink>
      </Container>
    )
  }

  return (
    <Container
      href={
        type === 'twitter'
        ? `https://twiter.com/share?url=${href}&hashtags=jsug`
        : `http://www.facebook.com/share.php?u=${href}`
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
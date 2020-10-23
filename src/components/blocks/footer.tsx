import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

import {  Wrapper } from 'components/layouts'

const Container = styled.footer`
  background-color: ${p => p.theme.colors.primary.main};
  background-image: url('/images/wave-bg.png');
  background-repeat: repeat;
  padding: ${p => p.theme.spacing(1, 0, 2, 0)};

  ${p => p.theme.screen.md} {
    padding: ${p => p.theme.spacing(2, 0)};
  }
`

const Inner = styled.div`
  color: ${p => p.theme.colors.white};
  display: flex;
  flex-direction: column;

  ${p => p.theme.screen.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const Socials = styled.div`
  > * {
    margin: ${p => p.theme.spacing(0, 2)};
  }

  margin: ${p => p.theme.spacing(2)} auto;

  ${p => p.theme.screen.md} {
    margin: ${p => p.theme.spacing(4)} 0;
  }
`

const Copyright = styled.small`
  display: block;
  text-align: center;
  font-family: ${p => p.theme.font.family.mono};
  font-size: ${p => p.theme.font.size.sm};
  
  ${p => p.theme.screen.md} {
    text-align: right;
  }
`

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Inner>
          <Socials>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
          </Socials>
          <Copyright>Copyright &copy; 2020 JSUG. All Rights Reserved.</Copyright>
        </Inner>
      </Wrapper>
    </Container>
  )
}

export default Footer
import * as React from 'react'
import styled from 'styled-components'

import { Wrapper } from 'components/layouts'
import { Share } from 'components/elements'

const Container = styled.footer`
  background-color: ${p => p.theme.colors.primary.main};
  background-image: url('/images/wave-bg.png');
  background-repeat: repeat;
  padding: ${p => p.theme.spacing}px 0 ${p => p.theme.spacing * 2}px 0;

  ${p => p.theme.screen.md} {
    padding: ${p => p.theme.spacing * 2}px 0;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${p => p.theme.spacing * 3}px auto;

  > * {
    margin: 0 ${p => p.theme.spacing * 2}px;
  }

  ${p => p.theme.screen.md} {
    margin: 0 ${p => p.theme.spacing * 4}px 0;
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
            <Share type="twitter" />
            <Share type="facebook" />
          </Socials>
          <Copyright>
            Copyright &copy; 2020 JSUG. All Rights Reserved.
          </Copyright>
        </Inner>
      </Wrapper>
    </Container>
  )
}

export default Footer

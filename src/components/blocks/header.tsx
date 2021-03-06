import * as React from 'react'
import styled from 'styled-components'

import { Wrapper } from 'components/layouts'
import { Share } from 'components/elements'

const Container = styled.header`
  background-color: ${p => p.theme.colors.primary.main};
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.spacing * 2}px 0;
`

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${props => props.theme.screen.md} {
    grid-template-columns: 1fr 2fr 1fr;
  }
`

const Nav = styled.nav`
  display: none;
  color: ${p => p.theme.colors.white};

  ${props => props.theme.screen.md} {
    display: flex;
    align-items: center;
  }
`

const NavItem = styled.a`
  display: block;
  margin: 0 ${p => p.theme.spacing * 4}px;
  font-family: ${p => p.theme.font.family.mono};
`

const Shares = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Inner>
          <div />
          <Nav>
            <NavItem href="#about">#ABOUT</NavItem>
            <NavItem href="#sessions">#SESSIONS</NavItem>
            <NavItem href="#speakers">#SPEAKERS</NavItem>
          </Nav>
          <Shares>
            <Share type="twitter" />
            <Share type="facebook" />
          </Shares>
        </Inner>
      </Wrapper>
    </Container>
  )
}

export default Header

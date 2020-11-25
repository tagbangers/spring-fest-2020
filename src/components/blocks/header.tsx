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
  grid-template-columns: 1fr 2fr 1fr;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.white};
`

// const NavItem = styled.a`
//   display: block;
//   margin: ${p => p.theme.spacing(0, 4)};
//   font-family: ${p => p.theme.font.family.mono};
// `

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
            {/*
            <NavItem href="#">#ABOUT</NavItem>
            <NavItem href="#">#SESSIONS</NavItem>
            <NavItem href="#">#SPEAKERS</NavItem>
            */}
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

import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

import { Wrapper } from 'components/layouts'

const Container = styled.header`
  background-color: ${p => p.theme.colors.primary.main};
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.spacing(2, 0)};
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

const ShareButton = styled.button`
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
  transition: all 0.1s ease-in;

  &:hover {
    background-color: ${p => p.theme.colors.primary.darker};
  }
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
            <ShareButton>
            <FontAwesomeIcon icon={faTwitter} />
            </ShareButton>
            <ShareButton>
            <FontAwesomeIcon icon={faFacebookSquare} />
            </ShareButton>
          </Shares>
        </Inner>
      </Wrapper>
    </Container>
  )
}

export default Header
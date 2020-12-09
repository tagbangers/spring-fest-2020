import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { Speaker } from 'entities/sessions'

interface Props {
  speaker: Speaker
  onClose: () => void
}

const Container = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${props => props.theme.colors.primary.main};
  padding: ${props => props.theme.spacing}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: ${props => props.theme.spacing * 2}px;
`

const Main = styled.div`
  display: flex;
  margin: auto;

  ${props => props.theme.screen.md} {
    align-items: center;
    width: 70%;
  }
`

const CloseButton = styled.div`
  color: ${props => props.theme.colors.white};
  margin: ${props => props.theme.spacing * 3}px 0;
  cursor: pointer;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in;
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`

const Figure = styled.figure`
  padding: 0 ${props => props.theme.spacing * 5}px;
`

const ProfileImage = styled.img`
  display: block;
  margin: 0 auto;
`

const Content = styled.div`
  padding: ${props => props.theme.spacing * 2}px;
  color: ${props => props.theme.colors.white};
`

const Name = styled.p`
  font-size: ${props => props.theme.font.size.lg};
  margin-left: ${props => props.theme.spacing * 2}px;
`

const Org = styled.p`
  font-size: ${props => props.theme.font.size.rg};
  margin-left: ${props => props.theme.spacing * 2}px;
  color: ${props => props.theme.colors.brand};
`

const Profile = styled.p`
  font-size: ${props => props.theme.font.size.rg};
  margin-left: ${props => props.theme.spacing * 2}px;
`

const Divider = styled.span`
  display: block;
  background-color: ${props => props.theme.colors.palegray};
  height: 2px;
  width: 63px;
  margin: ${props => props.theme.spacing * 8}px 0;
`

const Item: React.FC<Props> = ({ speaker, onClose }) => {
  return (
    <Container>
      <Header></Header>
      <Main>
        <Figure>
          <CloseButton onClick={onClose}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </CloseButton>
          <ProfileImage
            src={`/images/profiles/${speaker.slug}.jpg`}
            width={185}
            height={262}
          />
        </Figure>
        <Content>
          <Name>{speaker.name}</Name>
          <Org>{speaker.org}</Org>
          {speaker.profile && (
            <>
              <Divider />
              <Profile>{speaker.profile}</Profile>
            </>
          )}
        </Content>
      </Main>
    </Container>
  )
}

export default Item

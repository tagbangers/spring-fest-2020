import * as React from 'react'
import styled from 'styled-components'

import { Speaker } from 'entities/sessions'
import { Speaker as SpeakerModal } from 'components/blocks'

interface Props {
  speaker: Speaker
}

const Container = styled.div`
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing}px;
  margin: ${props => props.theme.spacing * 4}px 0;
`

const ProfileImage = styled.img`
  display: block;
  margin: 0 auto;
  cursor: pointer;
  width: 185px;
`

const Content = styled.div`
  padding: ${props => props.theme.spacing * 2}px;
`

const Name = styled.p`
  font-size: ${props => props.theme.font.size.rg};
  ${props => props.theme.screen.md} {
    margin-left: ${props => props.theme.spacing * 2}px;
  }
`

const Org = styled.p`
  font-size: ${props => props.theme.font.size.sm};
  color: ${props => props.theme.colors.brand};

  ${props => props.theme.screen.md} {
    margin-left: ${props => props.theme.spacing * 2}px;
  }
`

const Divider = styled.span`
  display: block;
  background-color: ${props => props.theme.colors.palegray};
  height: 2px;
  width: 63px;
  margin: ${props => props.theme.spacing * 2}px 0;
`

const Item: React.FC<Props> = ({ speaker }) => {
  const [speakerVisibility, setSpeakerVisibility] = React.useState(false)

  const handleClickSpeaker = () => {
    setSpeakerVisibility(true)
  }

  const handleClose = () => {
    setSpeakerVisibility(false)
  }

  return (
    <>
      <Container onClick={handleClickSpeaker}>
        <ProfileImage src={`/images/profiles/${speaker.slug}.jpg`} />
        <Content>
          <Name>{speaker.name}</Name>
          <Divider />
          <Org>{speaker.org}</Org>
        </Content>
      </Container>
      {speakerVisibility && (
        <SpeakerModal speaker={speaker} onClose={handleClose} />
      )}
    </>
  )
}

export default Item

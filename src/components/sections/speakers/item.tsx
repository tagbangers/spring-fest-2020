import * as React from 'react'
import styled from 'styled-components'

import { Speaker } from 'entities/sessions'

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
`

const Content = styled.div`
  padding: ${props => props.theme.spacing * 2}px;
`

const Name = styled.p`
  font-size: ${props => props.theme.font.size.rg};
  margin-left: ${props => props.theme.spacing * 2}px;
`

const Org = styled.p`
  font-size: ${props => props.theme.font.size.sm};
  margin-left: ${props => props.theme.spacing * 2}px;
`

const Divider = styled.span`
  display: block;
  background-color: ${props => props.theme.colors.palegray};
  height: 2px;
  width: 63px;
  margin: ${props => props.theme.spacing * 2}px 0;
`

const Item: React.FC<Props> = ({ speaker }) => {
  return (
    <Container>
      <ProfileImage
        src={`/images/profiles/${speaker.slug}.jpg`}
        width={185}
        height={262}
      />
      <Content>
        <Name>{speaker.name}</Name>
        <Divider />
        <Org>{speaker.org}</Org>
      </Content>
    </Container>
  )
}

export default Item

import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import {
  faVideo,
  faClipboard,
  faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons'
import Linkify from 'react-linkify'
import Tooltip from 'react-tooltip'

import { MergedSession } from 'entities/sessions'
import { theme } from 'components/foundations'

interface Props {
  session: MergedSession
}

const Container = styled.div`
  padding: ${props => props.theme.spacing * 4}px 0;
`

const Header = styled.header`
  display: flex;
  align-items: flex-start;
`

const Time = styled.div`
  padding-top: ${props => props.theme.spacing / 2}px;
  font-size: ${props => props.theme.font.size.sm};
  font-weight: bold;
  font-family: ${p => p.theme.font.family.mono};
  min-width: 150px;
`

const Title = styled.h2`
  margin: ${props => props.theme.spacing * 3}px 0;
  font-size: ${props => props.theme.font.size.md};
  font-weight: bold;
`

const SpeakerHolder = styled.div`
  margin: 0 ${props => props.theme.spacing * 2}px;
`

const Speaker = styled.p`
  font-weight: bold;
  font-size: ${props => props.theme.font.size.rg};
`

const Org = styled.span`
  font-size: ${props => props.theme.font.size.sm};
  color: ${props => props.theme.colors.brand};
`

const Description = styled.p`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.font.size.rg};
  line-height: 1.8;

  a {
    color: ${props => props.theme.colors.brand};
  }
`

const Divider = styled.span`
  display: block;
  background-color: ${props => props.theme.colors.palegray};
  height: 6px;
  width: 48px;
  margin: ${props => props.theme.spacing * 3}px 0;
`

const MediaHolder = styled.div`
  display: flex;
  align-items: center;
`

const Media = styled.a`
  display: flex;
  margin-right: ${props => props.theme.spacing * 4}px;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

const TextLink = styled.a`
  display: block;
  color: ${props => props.theme.colors.brand};
  margin-right: ${props => props.theme.spacing * 4}px;

  label {
    display: inline-block;
    margin: 0 ${props => props.theme.spacing}px;
  }
`

const getTime = (dateStr: string) => {
  const d = new Date(dateStr)
  const hour = d.getHours()
  const min = d.getMinutes()

  const pad = (n: number) => {
    return n < 10 ? '0' + n : n
  }

  return `${pad(hour)}:${pad(min)}`
}

const Track: React.FC<Props> = ({ session }) => {
  console.log(session)
  return (
    <Container>
      <Header>
        <Time>
          {getTime(session.start)} - {getTime(session.end)}
        </Time>
        {session.speakers.map(s => (
          <SpeakerHolder key={s.slug}>
            <Speaker>{s.name}</Speaker>
            <Org>{s.org}</Org>
          </SpeakerHolder>
        ))}
      </Header>
      <Divider />
      <MediaHolder>
        {session.zoom && (
          <Media href={session.zoom} target="_blank" data-tip data-for="zoom">
            <FontAwesomeIcon icon={faVideo} color="#0091FF" />
            <Tooltip id="zoom" effect="solid">
              Zoomで視聴する
            </Tooltip>
          </Media>
        )}
        {session.youtube && (
          <Media
            href={session.youtube}
            target="_blank"
            data-tip
            data-for="youtube"
          >
            <FontAwesomeIcon icon={faYoutube} color="#DE5B40" />
            <Tooltip id="youtube" effect="solid">
              Youtubeで視聴する
            </Tooltip>
          </Media>
        )}
        {session.hashtag && (
          <Media
            href={`https://twitter.com/intent/tweet?hashtags=jsug,${session.hashtag}`}
            target="_blank"
            data-tip
            data-for="tweet"
          >
            <FontAwesomeIcon icon={faTwitter} color="#0091FF" />
            <Tooltip id="tweet" effect="solid">
              Tweet
            </Tooltip>
          </Media>
        )}
        {session.enquete && (
          <TextLink href={session.enquete} target="_blank">
            <FontAwesomeIcon icon={faClipboard} color={theme.colors.brand} />
            <label>アンケート</label>
          </TextLink>
        )}
        {session.material && (
          <TextLink href={session.material} target="_blank">
            <FontAwesomeIcon
              icon={faChalkboardTeacher}
              color={theme.colors.brand}
            />
            <label>発表資料</label>
          </TextLink>
        )}
      </MediaHolder>
      <Title>{session.title}</Title>
      <Description>
        <Linkify>{session.description}</Linkify>
      </Description>
    </Container>
  )
}

export default Track

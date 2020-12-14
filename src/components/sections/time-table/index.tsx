import * as React from 'react'
import styled from 'styled-components'
import { groupBy } from 'ramda'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

import { Sessions, Speaker } from 'entities/sessions'
import { Wrapper } from 'components/layouts'
import { theme } from 'components/foundations'
import { Prompt } from 'components/elements'

import Tracks from './tracks'

interface Props {
  sessions: Sessions
  speakers: Speaker[]
}

const Container = styled.div`
  background-color: ${props => props.theme.colors.white};
  position: relative;
  z-index: 1;
  padding: ${props => props.theme.spacing * 10}px 0 0 0;
`

const DownloadLink = styled.a`
  background-color: ${props => props.theme.colors.brand};
  font-size: ${props => props.theme.font.size.sm};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing}px
    ${props => props.theme.spacing * 2}px;
  display: inline-block;
  margin: ${props => props.theme.spacing * 2}px 0;
`

const TimeTable: React.FC<Props> = ({ sessions, speakers }) => {
  const grouped = groupBy(
    s => (s.track === 'advanced' ? 'advanced' : 'beginners'),
    sessions
  )

  return (
    <Container>
      <Wrapper>
        <Prompt size={theme.font.size.x2l} delay={800}>
          ONLINE_TALKS
        </Prompt>
        <DownloadLink href="/timetable.pdf" target="_blank">
          <FontAwesomeIcon icon={faFilePdf} />
          &nbsp;タイムテーブルダウンロード
        </DownloadLink>
        <Tracks
          advancedTracks={grouped['advanced']}
          beginnerTracks={grouped['beginners']}
          speakers={speakers}
        />
      </Wrapper>
    </Container>
  )
}

export default TimeTable

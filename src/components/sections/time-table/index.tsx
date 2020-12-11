import * as React from 'react'
import styled from 'styled-components'
import { groupBy } from 'ramda'

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

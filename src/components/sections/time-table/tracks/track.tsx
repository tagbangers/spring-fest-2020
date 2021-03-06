import * as React from 'react'

import styled from 'styled-components'

import { Sessions, Speaker } from 'entities/sessions'
import Item from './item'

interface Props {
  sessions: Sessions
  speakers: Speaker[]
}

const ItemHolder = styled.div`
  margin: ${props => props.theme.spacing * 4}px 0;
  border-bottom: 1px solid ${props => props.theme.colors.palegray};
`

const AdvancedTrack: React.FC<Props> = ({ sessions, speakers }) => {
  return (
    <>
      {sessions.map(s => (
        <ItemHolder key={s.start}>
          <Item session={s} speakers={speakers} />
        </ItemHolder>
      ))}
    </>
  )
}

export default AdvancedTrack

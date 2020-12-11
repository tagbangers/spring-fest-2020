import * as React from 'react'
import styled from 'styled-components'

import { Wrapper } from 'components/layouts'
import { theme } from 'components/foundations'
import { Prompt } from 'components/elements'
import { Speaker } from 'entities/sessions'

import Item from './item'

interface Props {
  speakers: Speaker[]
}

const Container = styled.div`
  font-family: ${p => p.theme.font.family.mono};
  margin: ${p => p.theme.spacing * 10}px 0 ${p => p.theme.spacing * 8}px 0;
`

const SpeakersHolder = styled.div`
  margin: ${p => p.theme.spacing * 8}px auto;

  ${theme.screen.md} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const Speakers: React.FC<Props> = ({ speakers }) => {
  return (
    <Container>
      <Wrapper>
        <Prompt size={theme.font.size.x2l} delay={800}>
          SPEAKERS
        </Prompt>
        <SpeakersHolder>
          {speakers.map(s => (
            <Item key={s.slug} speaker={s} />
          ))}
        </SpeakersHolder>
      </Wrapper>
    </Container>
  )
}

export default Speakers

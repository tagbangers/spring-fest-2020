import * as React from 'react'
import styled from 'styled-components'

interface Props {
  on: string
  at: string
}

const Container = styled.div`
  font-family: ${p => p.theme.font.family.mono};
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.white};
  margin: ${p => p.theme.spacing * 5}px ${p => p.theme.spacing}px};
  font-size: ${p => p.theme.font.size.rg};

  ${p => p.theme.screen.md} {
    font-size: ${p => p.theme.font.size.md};
    margin-bottom: ${p => p.theme.spacing * 20}px;
  }
`

const On = styled.p`
  background-color: ${p => p.theme.colors.brand};
  padding: ${p => p.theme.spacing * 0.1}px ${p => p.theme.spacing * 2}px;

  ${p => p.theme.screen.md} {
    padding: ${p => p.theme.spacing * 0.5}px ${p => p.theme.spacing * 5}px;
  }
`

const At = styled.p`
  margin: 0 ${p => p.theme.spacing * 5}px;
`

const Dates: React.FC<Props> = ({ on, at }) => {
  return (
    <Container>
      <On>{on}</On>
      <At>{at}</At>
    </Container>
  )
}

export default Dates

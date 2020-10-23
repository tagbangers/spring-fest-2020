import * as React from 'react'

import styled from 'styled-components'

const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  ${p => p.theme.screen.lg} {
    width: 1024x;
  }

  ${p => p.theme.screen.xl} {
    width: 1240px;
  }
`

const Wrapper: React.FC = ({ children }) => {
  return (
    <Container>{children}</Container>
  )
}

export default Wrapper
import * as React from 'react'
import styled from 'styled-components'

import { Prompt } from 'components/elements'
import { Wrapper } from 'components/layouts'

import Dates from './dates'
import { theme } from 'components/foundations'

const Container = styled.div`
  background-color: ${p => p.theme.colors.primary.main};
  position: relative;
  z-index: 1;
`

const Grid = styled.div`
  padding: 20% 0;

  ${p => p.theme.screen.md} {
    display: grid;
    height: 65vh;
    grid-template-columns: 1fr 3fr;
    padding: ${p => p.theme.spacing * 6}px 0;
  }
`

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`

const Logo = styled.div`
  background-image: url(/images/title.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left center;
  height: 60px;
  margin-bottom: ${p => p.theme.spacing}px;

  ${p => p.theme.screen.md} {
    height: 130px;
    margin-bottom: ${p => p.theme.spacing * 4}px;
  }
`

const Background = styled.div`
  background-image: url('/images/dots.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  animation-duration: 1s;
  animation-name: fadeIn;

  ${p => p.theme.screen.md} {
    height: 900px;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.995);
    }

    100%: {
      opacity: 1;
      transform: scale(1);
    }
  }
`

const Teaser = () => {
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    const img = document.createElement('img')
    img.onload = () => {
      setReady(true)
    }
    img.src = '/images/dots.png'
  }, [])

  return (
    <Container>
      <Wrapper>
        <Grid>
          <div />
          <Titles>
            <Dates on="ONLINE" at="2020.12.17 Thu" />
            <Logo />
            <Prompt size={theme.font.size.x3l} delay={1200}>
              2020
            </Prompt>
          </Titles>
        </Grid>
      </Wrapper>
      {ready && <Background />}
    </Container>
  )
}

export default Teaser

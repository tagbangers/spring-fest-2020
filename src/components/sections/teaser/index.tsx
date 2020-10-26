import * as React from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

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
    padding: ${p => p.theme.spacing(6, 0)};
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
  margin-bottom: ${p => p.theme.spacing(1)};

  ${p => p.theme.screen.md} {
    height: 130px;
    margin-bottom: ${p => p.theme.spacing(4)};
  }
`

const Background = styled(motion.div)`
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

  ${p => p.theme.screen.md} {
    height: 900px;
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
              <Prompt size={theme.font.size.x3l} delay={1200}>2020</Prompt>
            </Titles>
          </Grid>
        </Wrapper>
        <AnimatePresence>
          {ready && (
            <Background
              initial={{ opacity: 0, scale: 0.995 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 3
              }}
            />
          )}
        </AnimatePresence>
      </Container>
  )
}

export default Teaser
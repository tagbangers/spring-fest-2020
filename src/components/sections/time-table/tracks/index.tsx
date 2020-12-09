import * as React from 'react'
import styled from 'styled-components'

import { Wrapper } from 'components/layouts'
import { ITheme } from 'components/foundations/theme'
import { Sessions, Speaker } from 'entities/sessions'

import Track from './track'

interface Props {
  advancedTracks: Sessions
  beginnerTracks: Sessions
  speakers: Speaker[]
}

const Container = styled.div`
  padding-bottom: 300px;
`

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.brand};
  margin: ${props => props.theme.spacing * 4}px 0;
`

interface TabProps {
  active: boolean
  theme: ITheme
}

const Tab = styled.div`
  padding: ${props => props.theme.spacing * 2}px
    ${props => props.theme.spacing * 2}px;
  font-family: ${props => props.theme.font.family.mono};
  font-size: ${props => props.theme.font.size.sm};
  font-weight: bold;
  color: ${(props: TabProps) =>
    props.active ? props.theme.colors.brand : props.theme.colors.black};
  border-bottom: 3px solid
    ${(props: TabProps) =>
      props.active ? props.theme.colors.brand : 'transparent'};
  cursor: pointer;
  width: 50%;
  text-align: center;

  ${props => props.theme.screen.md} {
    width: auto;
    text-align: left;
    font-size: ${props => props.theme.font.size.md};
    padding: ${props => props.theme.spacing * 2}px
      ${props => props.theme.spacing * 4}px;
  }
`

const TabContents = styled.div`
  padding: ${props => props.theme.spacing * 4}px 0;
  position: relative;
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  height: 500px;
  background-image: url('/images/wave.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const Notion = styled.p`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.font.size.sm};
`

enum Tabs {
  Advanced,
  Beginner,
}

const Tracks: React.FC<Props> = ({
  advancedTracks,
  beginnerTracks,
  speakers,
}) => {
  const [activeTab, setTab] = React.useState(Tabs.Advanced)
  const toggleTab = (tab: Tabs) => () => {
    setTab(tab)
  }

  return (
    <Container>
      <Wrapper>
        <TabContainer>
          <Tab
            onClick={toggleTab(Tabs.Advanced)}
            active={activeTab === Tabs.Advanced}
          >
            _Advanced Track;
          </Tab>
          <Tab
            onClick={toggleTab(Tabs.Beginner)}
            active={activeTab === Tabs.Beginner}
          >
            _Beginner Track;
          </Tab>
        </TabContainer>
        <TabContents>
          <Notion>※ 現在、各セッションは仮の内容です</Notion>
          {activeTab === Tabs.Advanced ? (
            <Track sessions={advancedTracks} speakers={speakers} />
          ) : (
            <Track sessions={beginnerTracks} speakers={speakers} />
          )}
        </TabContents>
      </Wrapper>
      <Background />
    </Container>
  )
}

export default Tracks

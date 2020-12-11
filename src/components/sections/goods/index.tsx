import * as React from 'react'
import styled from 'styled-components'

import { Wrapper } from 'components/layouts'
import { theme } from 'components/foundations'
import { ITheme } from 'components/foundations/theme'
import { Prompt } from 'components/elements'

const Container = styled.div`
  font-family: ${p => p.theme.font.family.mono};
  margin: ${p => p.theme.spacing * 10}px 0 ${p => p.theme.spacing * 8}px 0;
`

const Title = styled.h3`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.font.size.xl};
  margin: ${p => p.theme.spacing * 4}px 0;
`

const Tabs = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${p => p.theme.colors.brand};
`

interface TabProps {
  selected: boolean
  theme: ITheme
}

const Tab = styled.button`
  border: none;
  border-bottom: 6px solid
    ${(p: TabProps) => {
      return p.selected ? p.theme.colors.brand : 'transparent'
    }};
  background-color: transparent;
  padding: ${p => p.theme.spacing * 2}px ${p => p.theme.spacing * 3}px};
  color: ${(p: TabProps) => {
    return p.selected ? p.theme.colors.brand : p.theme.colors.white
  }};
  transition: all 0.3s ease-in-out;
`

const TabContents = styled.div`
  background-color: ${p => p.theme.colors.black};
  padding: ${p => p.theme.spacing * 1}px;
  line-height: 1;
  margin-bottom: ${p => p.theme.spacing * 4}px;

  ${p => p.theme.screen.md} {
    padding: ${p => p.theme.spacing * 4}px;
  }

  code {
    font-family: ${p => p.theme.font.family.code};
    color: ${p => p.theme.colors.white};
    font-size: 0.7em;

    ${p => p.theme.screen.md} {
      font-size: ${p => p.theme.font.size.rg};
    }
  }
`

const LinkButton = styled.a`
  width: 100%;
  display: block;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.brand};
  padding: ${p => p.theme.spacing * 2}px ${p => p.theme.spacing * 3}px;
  text-align: center;

  ${p => p.theme.screen.md} {
    width: auto;
    display: inline-block;
  }
`

enum SelectedTab {
  MAVEN,
  GRADLE,
}

const mavenCommand = `$ ./mvnw spring-fest:run

   .   ____          _            __ _ _
  /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\
 ( ( )\\___ | '_ | '_| | '_ \\/ _\` | \\ \\ \\ \\
  \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )
   '  |____| .__|_| |_|_| |_\\__, | / / / /
  =========|_|==============|___/=/_/_/_/
 :: Spring Fest ::         (v2020.RELEASE)
`

const gradleCommand = `$ ./gradlew festRun

   .   ____          _            __ _ _
  /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\
 ( ( )\\___ | '_ | '_| | '_ \\/ _\` | \\ \\ \\ \\
  \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )
   '  |____| .__|_| |_|_| |_\\__, | / / / /
  =========|_|==============|___/=/_/_/_/
 :: Spring Fest ::         (v2020.RELEASE)
`

const Goods: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(SelectedTab.MAVEN)

  const handleChangeTab = (selected: SelectedTab) => () => {
    setSelectedTab(selected)
  }

  return (
    <Container>
      <Wrapper>
        <Prompt size={theme.font.size.x2l} delay={800}>
          EQUIPMENTS
        </Prompt>
        <Title> Spring FEST 2020 T-shirt</Title>
        <Tabs>
          <Tab
            onClick={handleChangeTab(SelectedTab.MAVEN)}
            selected={selectedTab === SelectedTab.MAVEN}
          >
            for Maven user
          </Tab>
          <Tab
            onClick={handleChangeTab(SelectedTab.GRADLE)}
            selected={selectedTab === SelectedTab.GRADLE}
          >
            for Gradle user
          </Tab>
        </Tabs>
        <TabContents>
          <pre>
            <code>
              {selectedTab === SelectedTab.MAVEN ? mavenCommand : gradleCommand}
            </code>
          </pre>
          <code></code>
        </TabContents>
        <LinkButton href="https://suzuri.jp/JSUG" target="_blank">
          {'￥2,750(Tax excluded)'}
        </LinkButton>
      </Wrapper>
    </Container>
  )
}

export default Goods

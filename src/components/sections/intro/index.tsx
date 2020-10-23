import * as React from 'react'
import styled from 'styled-components'

import { Wrapper } from 'components/layouts'

const Container = styled.div`
  background-color: ${p => p.theme.colors.primary.main};
`

const GridOneThree = styled.div`
  ${p => p.theme.screen.md} {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
`

const GridTwo = styled.div`
  padding: ${p => p.theme.spacing(4, 0)};

  ${p => p.theme.screen.md} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const DescriptionBox = styled.div`
  padding: ${p => p.theme.spacing(4, 0)};
  color: ${p => p.theme.colors.white};
  position: relative;

  ${p => p.theme.screen.md} {
    padding: ${p => p.theme.spacing(8)};
  }

  &::before {
    display: block;
    content: "";
    height: 4px;
    width: 20%;
    background-color: ${p => p.theme.colors.brand};
    margin-bottom: ${p => p.theme.spacing(3)};

    ${p => p.theme.screen.md} {
      height: 4px;
      width: 124px;
      margin-bottom: ${p => p.theme.spacing(6)};
    }
  }

  h3 {
    color: ${p => p.theme.colors.brand};
    font-weight: 500;
    font-family: ${p => p.theme.font.family.mono};
    font-size: ${p => p.theme.font.size.xl};
    line-height: 1.4;
    margin-bottom: ${p => p.theme.spacing(4)};
  }

  p {
    font-size: ${p => p.theme.font.size.rg};

    ${p => p.theme.screen.md} {
      line-height: 2;
    }
  }
`

const Contents = styled.div`
  margin-bottom: ${p => p.theme.spacing(8)};
`

const LogoHolder = styled.div`
  margin: ${p => p.theme.spacing(8, 0, 4, 0)};

  ${p => p.theme.screen.md} {
    margin: ${p => p.theme.spacing(8, 0)};
    &:after {
      display: block;
      content: "";
      height: 4px;
      width: 124px;
      background-color: ${p => p.theme.colors.brand};
      margin-top: ${p => p.theme.spacing(6)};
    }
  }
`

const Logo = styled.div`
  background-image: url(/images/spring-logo.png);
  background-repeat: no-repeat;
  background-size: contain;
  height: 42px;

  ${p => p.theme.screen.md} {
    width: 300px;
    height: 77px;
  }
`

const Description = styled.p`
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.spacing(2, 0)};
  font-size: ${p => p.theme.font.size.rg};
  line-height: 1.8;
`

const Intro: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <GridOneThree>
          <div/>
          <Contents>
            <LogoHolder>
              <Logo />
            </LogoHolder>
            <Description>
              Spring FrameworkはJavaの代表的なアプリケーションフレームワークであり、 登場した2002年より現在に至るまで世界中の多くのJavaアプリケーションで利用されています。 
              <br/>
              <br/>
              国内でも広く利用されておりますが、ユーザ間での情報交換・交流の場を提供し、 さらなるSpring Frameworkの認知度の向上、普及促進を図るため、本カンファレンスを開催いたします。
              <br/>
              <br/>
              日本Springユーザ会
            </Description>
          </Contents>
        </GridOneThree>
        <GridTwo>
          <DescriptionBox>
            <h3>Exceptional<br/>Speakers</h3>
            <Description>
            大まかな内容など。track1,2に分かれていて、2は初心者むけです的な説明。目的も複数要件と:抜き出しタイトルたます以外、閲覧するれる要件に許諾物独自の著作俳句でしれるてはさませ、方針の文章は、括弧し見解が侵害促し下による代表公正でしょませているませな。
            </Description>
          </DescriptionBox>
          <DescriptionBox>
            <h3>Remote safe,<br/>Communicate live</h3>
            <Description>
            オンラインでの開催に関する説明。録画、Zoom、後でYoutubeにあがるなど。および、主著作権と、引用いるフリーの事典、文章が重要に考慮さことをするて、日本語ペディアの注意でメディアに著作することをありて、著作有するた主従が確認、著作権紛争ますですとの創作をあるものは、ごく短いとあるばよいないなけれ。
            </Description>
          </DescriptionBox>
        </GridTwo>
      </Wrapper>
    </Container>
  )
}

export default Intro
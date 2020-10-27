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
    content: '';
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
      content: '';
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
          <div />
          <Contents>
            <LogoHolder>
              <Logo />
            </LogoHolder>
            <Description>
              Spring
              FrameworkはJavaの代表的なアプリケーションフレームワークであり、
              登場した2002年より現在に至るまで世界中の多くのJavaアプリケーションで利用されています。
              <br />
              <br />
              国内でも広く利用されておりますが、ユーザ間での情報交換・交流の場を提供し、
              さらなるSpring
              Frameworkの認知度の向上、普及促進を図るため、本カンファレンスを開催いたします。
              <br />
              <br />
              日本Springユーザ会
            </Description>
          </Contents>
        </GridOneThree>
        <GridTwo>
          <DescriptionBox>
            <h3>Outline 2020</h3>
            <Description>
              今年はオンラインでの開催となります。Beginner track と Advanced /
              Usecase track の2トラックに分かれて配信いたします。
              <br />
              <br />
              今回はスポンサーの登壇はございません。従来のSpring
              Festとは異なった丸一日開催の本イベントを、コメントや質問、SNSへ投稿でアクティブに参加し、ぜひお楽しみください。
            </Description>
          </DescriptionBox>
          <DescriptionBox>
            <h3>How to join</h3>
            <Description>
              YouTubeを使って配信するためのURLを、イベント開始直前に参加者にお送りします。
              <br />
              <br />
              多少、音声・画質問題が発生する可能性もありますことをご了承ください。
              YouTube の接続 URL は開催前に Doorkeeperより送る予定です。
              Doorkeeper
              アカウント登録されているSNSサービスなどを登録しているメールアドレス宛に届きますので、そちらをご確認ください。
            </Description>
          </DescriptionBox>
        </GridTwo>
      </Wrapper>
    </Container>
  )
}

export default Intro

import * as React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import Typist from 'react-typist'
import styled from 'styled-components'

import { theme } from 'components/foundations'

interface Props {
  children: string
  delay?: number
  color?: string
  size?: string
}

interface TextProps {
  color: string
  size: string
}

const Text = styled.div`
  display: flex;
  align-items: center;
  font-family: ${p => p.theme.font.family.mono};
  color: ${(p: TextProps) => p.color};
  font-size: ${(p: TextProps) => p.size};
  font-weight: 300;
  user-select: none;

  .Cursor {
    display: inline-block;

    &--blinking {
      opacity: 0;
      animation: blinks 1s linear infinite;

      @keyframes blinks {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    }
  }
`

const Prefix = styled.span`
  display: inline-block;
  margin-right: ${p => p.theme.spacing * 2}px;

  ${p => p.theme.screen.md} {
    margin-right: ${p => p.theme.spacing * 5}px;
  }
`

const Prompt: React.FC<Props> = ({
  children,
  delay = 0,
  color = theme.colors.brand,
  size = theme.font.size.xl,
}) => {
  const [active, setActive] = React.useState(false)

  const handleChange = (isVisible: boolean) => {
    setActive(isVisible)
  }

  return (
    <VisibilitySensor onChange={handleChange}>
      <Text color={color} size={size}>
        <Prefix>{'> '}</Prefix>
        {active && (
          <Typist
            cursor={{
              show: true,
              blink: true,
              element: '_',
            }}
          >
            <Typist.Delay ms={delay} />
            {children}
          </Typist>
        )}
      </Text>
    </VisibilitySensor>
  )
}

export default Prompt

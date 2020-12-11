import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { theme } from 'components/foundations'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing * 10} 0;
`

const Loader: React.FC = () => {
  return (
    <Container>
      <FontAwesomeIcon icon={faSpinner} color={theme.colors.brand} spin />
    </Container>
  )
}

export default Loader

import styled from 'styled-components'
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../constants'

export default styled.a`
  color: ${COLOR_SECONDARY};
  :hover {
    color: ${COLOR_PRIMARY};
    text-decoration: none;
  }
`

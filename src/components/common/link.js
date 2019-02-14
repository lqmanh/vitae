import styled from 'styled-components'
import { COLOR_PRIMARY } from '../../constants'

export default styled.a`
  color: rgba(216, 67, 21, 0.8);
  :hover {
    color: ${COLOR_PRIMARY};
    text-decoration: none;
  }
`

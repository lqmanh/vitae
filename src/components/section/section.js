import React from 'react'

import { ColoredBox } from '../common/box'
import constants from '../../constants'


export default (props) => (
  <ColoredBox id={props.id} color={constants.COLOR_PRIMARY} width='100%' height={props.height}>
    {props.children}
  </ColoredBox>
)

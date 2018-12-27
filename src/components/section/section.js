import React from 'react'

import { ColoredBox } from '../common/box'
import constants from '../../constants'


export default (props) => (
  <ColoredBox id={props.id} color={constants.COLOR_PRIMARY} padding='48px' width='100%' height={props.height}>
    {props.children}
  </ColoredBox>
)

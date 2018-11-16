import React from 'react'

import { ColoredBox } from '../common/box'


export default (props) => (
  <ColoredBox id={props.id} color='#d32f2f' width='100%' height={props.height}>
    {props.children}
  </ColoredBox>
)

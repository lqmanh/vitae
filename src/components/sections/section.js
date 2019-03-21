import React from 'react'

import Box from '../common/box'
import { COLOR_PRIMARY } from '../../constants'

export default (props) => (
  <Box id={props.id} width='100%' height={props.height} color={COLOR_PRIMARY} padding='48px'>
    {props.children}
  </Box>
)

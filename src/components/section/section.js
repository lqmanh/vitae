import React from 'react'
import styled from 'styled-components'

import Box from '../common/box'


const Section = (props) => (
  <Box className={props.className} id={props.id} width='100vw' height={props.height}>
    {props.children}
  </Box>
)


export default styled(Section)`
  background-color: #d32f2f;
`

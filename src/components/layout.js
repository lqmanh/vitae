import React from 'react'
import styled from 'styled-components'

import TopBar from './topbar'


export default styled((props) => (
  <>
    <TopBar />
    <div className={props.className}>{props.children}</div>
  </>
))`
  margin-top: 56px;
`

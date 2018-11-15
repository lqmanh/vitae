import React from 'react'
import styled from 'styled-components'

import TopBar from './topbar'


const Layout = (props) => (
  <>
    <TopBar />
    <div className={props.className}>{props.children}</div>
  </>
)


export default styled(Layout)`
  margin-top: 56px;
`

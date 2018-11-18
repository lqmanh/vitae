import React from 'react'

import TopBar from './topbar'


export default (props) => (
  <>
    <TopBar />
    {props.children}
  </>
)

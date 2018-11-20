import React from 'react'


export default (props) => (
  <div className='row p-3'>
    <div className='col-12 col-md-4 pl-0'>{props.sideBar}</div>
    <div className='col-12 col-md-8 pr-0'>{props.body || props.children}</div>
  </div>
)

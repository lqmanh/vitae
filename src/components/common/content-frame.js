import React from 'react'


export default (props) => (
  <div className='row align-items-center p-3'>
    <div className='col-4'>{props.sideBar}</div>
    <div className='col-8'>{props.body || props.children}</div>
  </div>
)

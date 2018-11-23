import React from 'react'


export default (props) => (
  <div className='row p-3'>
    <div className='col-12 col-md-4'>{props.sideBar}</div>
    <div className='col-12 col-md-8'>{props.body || props.children}</div>
  </div>
)

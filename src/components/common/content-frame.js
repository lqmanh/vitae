import React from 'react'


export default (props) => (
  <div className='row align-items-center p-3'>
    <div className='col-4 d-flex justify-content-center'>{props.sideBar}</div>
    <div className='col-8 d-flex justify-content-start'>{props.body}</div>
  </div>
)

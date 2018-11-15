import React from 'react'


export default (props) => (
  <nav className='navbar navbar-expand-sm navbar-light bg-light fixed-top shadow'>
    <a className='navbar-brand mb-0 h1' href='#top'>
      <strong>VITAE</strong>
    </a>
    <button className='navbar-toggler' data-toggle='collapse' data-target='#navbar-nav'>
      <span className='navbar-toggler-icon' />
    </button>
    <div className='collapse navbar-collapse' id='navbar-nav'>
      <div className='navbar-nav'>
        <a className='nav-item nav-link' href='#profile'>Profile</a>
        <a className='nav-item nav-link' href='#education'>Education</a>
        <a className='nav-item nav-link' href='#skills'>Skills</a>
        <a className='nav-item nav-link' href='#projects'>Projects</a>
      </div>
    </div>
  </nav>
)

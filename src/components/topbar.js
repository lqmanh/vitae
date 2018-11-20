import React from 'react'


const sections = [
  { id: 'profile', name: 'Profile' },
  { id: 'skills', name: 'Skills' },
  { id: 'achievements', name: 'Achievements' },
  { id: 'things-i-use', name: 'Things I Use' },
  { id: 'projects', name: 'Projects' },
]


export default (props) => (
  <nav className='navbar navbar-expand-md navbar-light bg-light shadow'>
    <a className='navbar-brand mb-0 h1' href='#top'>
      <strong>VITAE</strong>
    </a>
    <button className='navbar-toggler' data-toggle='collapse' data-target='#navbar-nav'>
      <span className='navbar-toggler-icon' />
    </button>
    <div className='collapse navbar-collapse' id='navbar-nav'>
      <div className='navbar-nav'>{
        sections.map((sect) => <a className='nav-item nav-link' href={`#${sect.id}`}>{sect.name}</a>)
      }</div>
    </div>
  </nav>
)

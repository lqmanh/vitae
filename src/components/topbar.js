import React from 'react'


export default (props) => {
  const sections = [
    { name: 'Profile' },
    { name: 'Skills' },
    { name: 'Achievements' },
    { name: 'Projects' },
  ]
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light fixed-top shadow'>
      <a className='navbar-brand mb-0 h1' href='#top'>
        <strong>VITAE</strong>
      </a>
      <button className='navbar-toggler' data-toggle='collapse' data-target='#navbar-nav'>
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbar-nav'>
        <div className='navbar-nav'>{
          sections.map((sect) => <a className='nav-item nav-link' href={`#${sect.name}`}>{sect.name}</a>)
        }</div>
      </div>
    </nav>
  )
}

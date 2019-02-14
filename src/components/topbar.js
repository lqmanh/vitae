import React from 'react'
import styled from 'styled-components'

import { COLOR_PRIMARY } from '../constants'

const sections = [
  { id: 'profile', name: 'Profile' },
  { id: 'achievements', name: 'Achievements' },
  { id: 'skills', name: 'Skills & Experience' },
  { id: 'projects', name: 'Projects' }
]

const ColoredText = styled.span`
  color: ${(props) => props.color};
`

export default styled((props) => (
  <nav className={`navbar navbar-expand-md navbar-light fixed-top bg-light shadow ${props.className}`}>
    <a className='navbar-brand' href='#top'>
      <strong>
        <ColoredText color={COLOR_PRIMARY}>VITAE</ColoredText>
      </strong>
    </a>
    <button className='navbar-toggler' data-toggle='collapse' data-target='#navbar-nav'>
      <span className='navbar-toggler-icon' />
    </button>
    <div className='collapse navbar-collapse' id='navbar-nav'>
      <div className='navbar-nav'>
        {sections.map((sect, i) => (
          <a className={`nav-item nav-link`} href={`#${sect.id}`} key={i}>
            {sect.name}
          </a>
        ))}
      </div>
    </div>
  </nav>
))`
  padding: 0.25rem 1rem;
`

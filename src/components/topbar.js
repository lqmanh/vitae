import React from 'react'
import styled from 'styled-components'

import constants from '../constants'


const sections = [
  { id: 'profile', name: 'Profile' },
  { id: 'achievements', name: 'Achievements' },
  { id: 'skills', name: 'Skills & Experience' },
  { id: 'projects', name: 'Projects' },
  { id: 'things-i-use', name: 'Things I Use' },
]

const ColoredText = styled.span`
  color: ${(props) => props.color}
`


export default (props) => (
  <nav className='navbar navbar-expand-md navbar-light bg-light shadow'>
    <a className='navbar-brand' href='#top'>
      <strong>
        <ColoredText color={constants.COLOR_PRIMARY}>VITAE</ColoredText>
      </strong>
    </a>
    <button className='navbar-toggler' data-toggle='collapse' data-target='#navbar-nav'>
      <span className='navbar-toggler-icon' />
    </button>
    <div className='collapse navbar-collapse' id='navbar-nav'>
      <div className='navbar-nav'>{
        sections.map((sect) => (
          <a className={`nav-item nav-link`} href={`#${sect.id}`}>
            {sect.name}
          </a>
        ))
      }</div>
    </div>
  </nav>
)

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


export default class TopBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lastScrollY: 0,
      shown: true
    }
  }

  handleScroll = (event) => {
    const pos = window.scrollY
    const shown = pos > this.state.lastScrollY ? false : true
    this.setState({ lastScrollY: pos, shown })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    if (!this.state.shown) return null
    return (
      <nav className='navbar fixed-top navbar-expand-md navbar-light bg-light shadow'>
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
              <a className={`nav-item nav-link`} href={`#${sect.id}`}>{sect.name}</a>
            ))
          }</div>
        </div>
      </nav>
    )
  }
}

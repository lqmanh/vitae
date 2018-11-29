import React from 'react'

import Section from './section'
import Box, { ColoredBox } from '../common/box'
import ContentFrame from '../common/content-frame'


const things = [
  {
    name: 'Databases',
    value: [
      'InfluxDB',
      'MongoDB',
      'MySQL/MariaDB'
    ]
  },
  {
    name: 'Frameworks & Libraries',
    value: [
      'Bootstrap, Bulma (CSS)',
      'Next.js (Javascript)',
      'Node.js + Express (Javascript)',
      'React (Javascript)',
      'Scrapy (Python)',
    ],
    optionalValue: [
      'Click (Python)',
      'Passport + JWT (Javascript)',
      'Storybook (Javascript)',
      'styled-components, styled-jsx (CSS)',
    ]
  },
  {
    name: 'Platforms',
    value: [
      'DBaaS (MongoDB Atlas)',
      'Linux (Fedora, Manjaro + KDE)',
      'PaaS (Heroku)',
      'Serverless (AWS Lambda, Zeit Now)',
      'VPS (Vultr)',
    ],
  },
  {
    name: 'Tools',
    value: [
      'Shell (Bash/Fish Shell)',
      'Text Editor/IDE (Visual Studio Code, Vim)',
      'VCS (Git + Github, Gitlab)',
    ]
  },
]

const SideBar = (props) => (
  <Box className='px-0 pr-md-3' distributeX='right'>
    <h1 className='d-block text-light text-truncate mb-0'>THINGS I USE</h1>
  </Box>
)

const Body = (props) => (
  <ColoredBox borderRadius='1rem' color='#f8f9fa' distributeX='left' width='100%' height='100%'>
    <div className='w-100'>
      <ul className='list-unstyled'>{
        things.map((thing) => (
          <li className='mb-3'>
            <h3>{thing.name}</h3>
            <ol>{
              thing.value.map((item) => <li>{item}</li>)
            }</ol>
          </li>
        ))
      }</ul>
    </div>
  </ColoredBox>
)

export default (props) => (
  <Section id='things-i-use'>
    <div className='container container-fluid'>
      <ContentFrame sideBar={<SideBar />} body={<Body />} />
    </div>
  </Section>
)

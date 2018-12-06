import React from 'react'

import Section from './section'
import Box, { ColoredBox } from '../common/box'
import ContentFrame from '../common/content-frame'
import HorizontalRule from '../common/horizontal-rule'


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
  <Box className='px-0 pt-0 pb-3 pr-md-3' distributeX='right'>
    <div>
      <h2 className='d-block text-light text-truncate mb-0'>THINGS I USE</h2>
      <HorizontalRule />
    </div>
  </Box>
)

const Body = (props) => (
  <ColoredBox className='p-4' borderRadius='1rem' color='#f8f9fa' distributeX='left' width='100%' height='100%'>
    <ul className='list-unstyled mb-0'>{
      things.map((thing) => (
        <li className='mb-3'>
          <h4>{thing.name}</h4>
          <ol>{thing.value.map((item) => <li>{item}</li>)}</ol>
        </li>
      ))
    }</ul>
  </ColoredBox>
)


export default (props) => (
  <Section id='things-i-use'>
    <div className='container container-fluid'>
      <ContentFrame sideBar={<SideBar />} body={<Body />} />
    </div>
  </Section>
)

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
      'Oclif (Javascript), Click (Python)',
      'React (Javascript)',
    ],
    optionalValue: [
      'Passport + JWT (Javascript)',
      'Storybook (Javascript)',
      'styled-components, styled-jsx (CSS in JS)',
    ]
  },
  {
    name: 'Platforms',
    value: [
      'Fedora, Manjaro + KDE (PC)',
      'MongoDB Atlas (DBaaS)',
      'Zeit Now (Serverless)',
    ],
  },
  {
    name: 'Tools',
    value: [
      'Bash/Fish (Shell)',
      'Git + Github, Gitlab (VCS)',
      'Visual Studio Code, Vim (Text editor/IDE)',
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

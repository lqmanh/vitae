import React from 'react'

import Section from './section'
import Box, { ColoredBox } from '../common/box'
import ContentFrame from '../common/content-frame'


const achievements = [
  {
    name: 'Professional',
    value: [
    ]
  },
  {
    name: 'Others',
    value: [
      'Former Vice President of Thuyet Trinh Club - University of Engineering & Technology, VNU'
    ]
  }
]

const SideBar = (props) => (
  <Box className='px-0 pr-md-3' distributeX='right'>
    <h1 className='d-block text-light text-truncate mb-0'>ACHIEVEMENTS</h1>
  </Box>
)

const Body = (props) => (
  <ColoredBox borderRadius='1rem' color='#f8f9fa' distributeX='left' width='100%' height='100%'>
    <div className='w-100'>
      <ul className='list-unstyled'>{
        achievements.map((type) => (
          <li className='mb-3'>
            <h3>{type.name}</h3>
            <ol>{
              type.value.map((achiev) => <li>{achiev}</li>)
            }</ol>
          </li>
        ))
      }</ul>
    </div>
  </ColoredBox>
)


export default (props) => (
  <Section id='achievements'>
    <div className='container container-fluid'>
      <ContentFrame sideBar={<SideBar />} body={<Body />} />
    </div>
  </Section>
)

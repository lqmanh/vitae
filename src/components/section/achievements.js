import React from 'react'

import Section from './section'
import Box, { ColoredBox } from '../common/box'
import ContentFrame from '../common/content-frame'


const SideBar = (props) => (
  <Box className='p-5 p-md-3'>
    <h1 className='d-block text-light text-truncate mb-0'>ACHIEVEMENTS</h1>
  </Box>
)

const Body = (props) => (
  <ColoredBox borderRadius='1rem' color='#f8f9fa' distributeX='left' width='100%' height='100%'>
    <div>
      <h3>Achievements and Experience</h3>
      <p>I'm worthless.</p>
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

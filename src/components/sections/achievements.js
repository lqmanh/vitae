import React from 'react'

import Section from './section'
import Box, { ColoredBox } from '../common/box'
import ContentFrame from '../common/content-frame'
import HorizontalRule from '../common/horizontal-rule'
import achievements from '../../data/achievements.json'

const SideBar = () => (
  <Box className='px-0 pt-0 pb-3 pr-md-3' distributeX='right'>
    <div>
      <h2 className='d-block text-light text-truncate mb-0'>ACHIEVEMENTS</h2>
      <HorizontalRule />
    </div>
  </Box>
)

const Body = () => (
  <ColoredBox className='p-4' borderRadius='1rem' color='#f8f9fa' distributeX='left' width='100%' height='100%'>
    <ul className='list-unstyled mb-0'>
      {achievements.map((type, i) => (
        <li className='mb-3' key={i}>
          <h4>{type.name}</h4>
          <ol>
            {type.value.map((achiev, j) => (
              <li key={j}>{achiev}</li>
            ))}
          </ol>
        </li>
      ))}
    </ul>
  </ColoredBox>
)

export default () => (
  <Section id='achievements'>
    <div className='container container-fluid'>
      <ContentFrame sideBar={<SideBar />} body={<Body />} />
    </div>
  </Section>
)

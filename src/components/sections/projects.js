import React from 'react'
import styled from 'styled-components'

import Section from './section'
import Box, { ColoredBox } from '../common/box'
import ContentFrame from '../common/content-frame'
import HorizontalRule from '../common/horizontal-rule'
import projects from '../../data/projects.json'

const SideBar = (props) => (
  <Box className='px-0 pt-0 pb-3 pr-md-3' distributeX='right'>
    <div>
      <h2 className='d-block text-light text-truncate mb-0'>PROJECTS</h2>
      <HorizontalRule />
    </div>
  </Box>
)

const Link = styled.a`
  color: rgba(211, 47, 47, 0.8);
  :hover {
    color: rgba(211, 47, 47, 1);
    text-decoration: none;
  }
`

const Body = (props) => (
  <ColoredBox className='p-4' borderRadius='1rem' color='#f8f9fa' distributeX='left' width='100%' height='100%'>
    <ul className='list-unstyled mb-0'>
      {projects.map((type) => (
        <li className='mb-3'>
          <h4>{type.name}</h4>
          <dl className='row mb-0'>
            {type.value.map((project) => (
              <>
                <dt className='col-12 col-md-4 col-xl-3'>
                  <Link href={project.url}>{project.name}</Link>
                </dt>
                <dd className='col-12 col-md-8 col-xl-9'>{project.description}</dd>
              </>
            ))}
          </dl>
        </li>
      ))}
    </ul>
  </ColoredBox>
)

export default (props) => (
  <Section id='projects'>
    <div className='container container-fluid'>
      <ContentFrame sideBar={<SideBar />} body={<Body />} />
    </div>
  </Section>
)

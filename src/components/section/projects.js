import React from 'react'
import styled from 'styled-components'

import Section from './section'
import Box, { ColoredBox } from '../common/box'
import ContentFrame from '../common/content-frame'
import HorizontalRule from '../common/horizontal-rule'


const projects = [
  {
    name: 'Personal Projects',
    value: [
      {
        name: 'directory-stat',
        description: 'Composable directory statistics fetcher where "fs" is insufficient',
        url: 'https://www.npmjs.com/package/directory-stat',
        status: 'active'
      },
      {
        name: 'Vitae',
        description: 'Personal digital CV and more',
        url: 'https://lqmanh.now.sh',
        status: 'active'
      },
      {
        name: 'Chamomile',
        description: 'Chamomile - like daisy, but not daisy',
        url: 'https://chamomile.now.sh',
        status: 'active'
      },
      {
        name: 'Showtime',
        description: 'Network device monitoring app',
        url: '#',
        status: 'coming soon'
      },
      {
        name: 'classer',
        description: 'Classify files into different directories',
        url: 'https://github.com/lqmanh/classer',
        status: 'discontinued'
      },
    ]
  },
  {
    name: "Albert Team's Projects",
    value: [
      {
        name: 'SpidermanJS',
        description: 'Minimal distributed web crawler boilerplate for JavaScript',
        url: 'https://github.com/albert-team/spidermanjs',
        status: 'active'
      },
      {
        name: 'Albert',
        description: 'URL shortening service',
        url: 'https://albert-demo.herokuapp.com',
        status: 'discontinued'
      },
    ]
  }
]

const SideBar = (props) => (
  <Box className='px-0 pt-0 pb-3 pr-md-3' distributeX='right'>
    <div>
      <h2 className='d-block text-light text-truncate mb-0'>PROJECTS</h2>
      <HorizontalRule />
    </div>
  </Box>
)

const Link = styled.a`
  color: #d32f2f;
  :hover {
    color: #d32f2f;
    text-decoration: none;
  }
`

const Badge = styled((props) => <span className={`badge badge-light ${props.className}`}>{props.children}</span>)`
  border: 1px solid;
  color: rgba(0, 0, 0, .5);
`

const Body = (props) => (
  <ColoredBox className='p-4' borderRadius='1rem' color='#f8f9fa' distributeX='left' width='100%' height='100%'>
    <ul className='list-unstyled mb-0'>{
      projects.map((type) => (
        <li className='mb-3'>
          <h4>{type.name}</h4>
          {type.value.map((project) => (
            <div className='row mb-2'>
              <div className='col-12 col-md-4 col-xl-3'>
                <Link className='mr-2' href={project.url}>{project.name}</Link>
                <Badge>{project.status}</Badge>
              </div>
              <div className='col-12 col-md-8 col-xl-9'>{project.description}</div>
            </div>
          ))}
        </li>
      ))
    }</ul>
  </ColoredBox>
)


export default (props) => (
  <Section id='projects'>
    <div className='container container-fluid'>
      <ContentFrame sideBar={<SideBar />} body={<Body />} />
    </div>
  </Section>
)

import React from 'react'
import styled from 'styled-components'

import Section from './section'
import Box, { ColoredBox } from '../common/box'
import ContentFrame from '../common/content-frame'


const projects = [
  {
    name: 'Personal Projects',
    value: [
      {
        name: 'directory-stat',
        description: 'Directory statistics',
        url: 'https://www.npmjs.com/package/directory-stat',
        status: 'Active'
      },
      {
        name: 'shirt_crawler',
        description: 'Crawl T-shirt information from e-commerce services like Amazon, Shopify,...',
        url: 'https://github.com/lqmanh/shirt_crawler',
        status: 'Active'
      },
      {
        name: 'Vitae',
        description: 'Personal digital CV and more',
        url: 'http://lqmanh.now.sh',
        status: 'Active'
      },
      {
        name: 'Chamomile',
        description: 'Personal blog',
        url: 'https://github.com/lqmanh/chamomile',
        status: 'Coming Soon'
      },
      {
        name: 'Showtime',
        description: 'Network monitoring app',
        url: null,
        status: 'Coming Soon'
      },
      {
        name: 'classer',
        description: 'Classify files into different directories',
        url: 'https://github.com/lqmanh/classer',
        status: 'Discontinued'
      },
    ]
  },
  {
    name: "Albert Team's Projects",
    value: [
      {
        name: 'Albert',
        description: 'URL shortener',
        url: 'https://albert-demo.herokuapp.com',
        status: 'Discontinued'
      },
    ]
  },
  {
    name: 'Projects I Contribute to',
    value: [
      {
        name: 'sebdah/scrapy-mongodb',
        description: 'MongoDB pipeline for Scrapy',
        url: 'https://github.com/sebdah/scrapy-mongodb',
        status: 'Active'
      },
      {
        name: 'zeit/now-examples',
        description: 'Examples of Now deployments you can use',
        url: 'https://github.com/zeit/now-examples',
        status: 'Active'
      },
    ]
  }
]

const SideBar = (props) => (
  <Box className='px-0 py-4 pr-md-3' distributeX='right'>
    <h2 className='d-block text-light text-truncate mb-0'>PROJECTS</h2>
  </Box>
)

const Link = styled.a`
  color: #d32f2f;
  :hover {
    color: #d32f2f;
    font-weight: bold;
    text-decoration: none;
  }
`

const Body = (props) => (
  <ColoredBox className='p-4' borderRadius='1rem' color='#f8f9fa' distributeX='left' width='100%' height='100%'>
    <ul className='list-unstyled mb-0'>{
      projects.map((type) => (
        <li className='mb-3'>
          <h4>{type.name}</h4>
          <ol>{
            type.value.map((project) => (
              <li>
                <Link className='text-monospace' href={project.url}>{project.name}</Link>
                &nbsp;&nbsp;
                <span className='badge badge-secondary'>{project.status}</span>
                <br />
                {project.description}
              </li>
            ))
          }</ol>
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

import React from 'react'
import Section from './section'
import Box from '../common/box'
import ContentFrame from '../common/content-frame'
import HorizontalRule from '../common/horizontal-rule'
import Link from '../common/link'
import projects from '../../data/projects.json'

const SideBar = () => (
  <Box className='px-0 pt-0 pb-3 pr-md-3' distributeX='right'>
    <div>
      <h2 className='text-light text-right mb-0'>PORTFOLIO</h2>
      <HorizontalRule />
    </div>
  </Box>
)

const Body = () => (
  <Box
    className='p-4'
    width='100%'
    height='100%'
    borderRadius='1rem'
    color='#f8f9fa'
    distributeX='left'
  >
    <ul className='list-unstyled mb-0'>
      {projects.map((type, i) => (
        <li className={i === projects.length - 1 ? '' : 'mb-3'} key={i}>
          <h4>{type.name}</h4>
          <dl className='row mb-0'>
            {type.value.map((project, j) => (
              <Project project={project} isLast={j === type.value.length - 1} key={j} />
            ))}
          </dl>
        </li>
      ))}
    </ul>
  </Box>
)

const Project = ({ project, isLast }) => (
  <>
    <dt className='col-12 col-md-4 col-xl-3'>
      <Link href={project.url}>{project.name}</Link>
    </dt>
    <dd className={`col-12 col-md-8 col-xl-9 ${isLast ? 'mb-0' : ''}`}>
      {project.description}
    </dd>
  </>
)

export default () => (
  <Section id='portfolio'>
    <ContentFrame sideBar={<SideBar />} body={<Body />} />
  </Section>
)

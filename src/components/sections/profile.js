import React from 'react'
import Section from './section'
import Box from '../common/box'
import ContentFrame from '../common/content-frame'
import HorizontalRule from '../common/horizontal-rule'
import profileInfo from '../../data/profile-info.json'

const SideBar = () => (
  <Box className='px-0 pt-0 pb-3 pr-md-3' distributeX='right'>
    <div>
      <h2 className='text-light text-right mb-0'>PROFILE</h2>
      <HorizontalRule />
    </div>
  </Box>
)

const Body = () => (
  <Box className='p-4' width='100%' height='100%' borderRadius='1rem' color='#f8f9fa'>
    <div>
      <h4>About me</h4>
      <dl className='row mb-0'>
        {profileInfo.map((field, i) => (
          <Field field={field} isLast={i === profileInfo.length - 1} key={i} />
        ))}
      </dl>
    </div>
  </Box>
)

const Field = ({ field, isLast }) => (
  <>
    <dt className='col-12 col-md-4 col-xl-3'>{field.fieldName}</dt>
    <dd className={`col-12 col-md-8 col-xl-9 ${isLast ? 'mb-0' : ''}`}>{field.value}</dd>
  </>
)

export default () => (
  <Section id='profile'>
    <ContentFrame sideBar={<SideBar />} body={<Body />} />
  </Section>
)

import React from 'react'
import styled from 'styled-components'

import Section from './section'
import Box, { ColoredBox } from '../common/box'
import ContentFrame from '../common/content-frame'
import profileInfo from '../../data/profile-info.json'
import avatarImg from '../../static/avatar.jpg'

const Avatar = styled.img`
  max-width: 300px;
  max-height: 300px;
`

const SideBar = (props) => (
  <Box className='px-0 pt-0 pb-3 pr-md-3' distributeX='right'>
    <Avatar className='rounded-circle' src={avatarImg} alt='Avatar' width='100%' height='100%' />
  </Box>
)

const Body = (props) => (
  <ColoredBox className='p-4' borderRadius='1rem' color='#f8f9fa' width='100%' height='100%'>
    <div>
      <h4>About me</h4>
      <dl className='row mb-0'>
        {profileInfo.map((field) => (
          <>
            <dt className='col-12 col-md-4 col-xl-3'>{field.fieldName}</dt>
            <dd className='col-12 col-md-8 col-xl-9'>{field.value}</dd>
          </>
        ))}
      </dl>
    </div>
  </ColoredBox>
)

export default (props) => (
  <Section id='profile'>
    <div className='container container-fluid'>
      <ContentFrame sideBar={<SideBar />} body={<Body />} />
    </div>
  </Section>
)

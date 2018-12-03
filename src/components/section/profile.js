import React from 'react'
import styled from 'styled-components'

import Section from './section'
import Box, { ColoredBox } from '../common/box'
import ContentFrame from '../common/content-frame'
import avatarImg from '../../static/avatar.jpg'


const info = [
  { fieldName: 'Full Name', value: 'Lương Quang Mạnh' },
  { fieldName: 'Date of Birth', value: 'May 8, 1998' },
  { fieldName: 'Hometown', value: 'Hai Duong City' },
  { fieldName: 'Current Address', value: 'Nam Tu Liem District, Ha Noi' },
  { fieldName: 'Occupation', value: 'Student at the University of Engineering & Technology (UET), Vietnam National University (VNU)' },
  { fieldName: 'Languages', value: 'Vietnamese, English' },
  { fieldName: 'Personalities', value: 'Reliable, studious, creative, ambitious,...' },
  { fieldName: 'Interests', value: 'Technology, music (especially piano), writing, photography, cinema,...' },
]

const Avatar = styled.img`
  max-width: 300px;
  max-height: 300px;
`

const SideBar = (props) => (
  <Box className='p-4 pl-md-0'>
    <Avatar className='rounded-circle' src={avatarImg} alt='Avatar' width='100%' height='100%' />
  </Box>
)

const Body = (props) => (
  <ColoredBox className='p-4' borderRadius='1rem' color='#f8f9fa' width='100%' height='100%'>
    <div>
      <h4>About me</h4>
      <dl className="row mb-0">{
        info.map((field) => (
          <>
            <dt className="col-4 col-lg-3">{field.fieldName}</dt>
            <dd className="col-8 col-lg-9">{field.value}</dd>
          </>
        ))
      }</dl>
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

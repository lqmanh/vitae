import React from 'react'

import Section from './section'
import { ColoredBox } from '../common/box'
import ContentFrame from '../common/content-frame'
import avatarImg from '../../static/avatar.jpg'


const SideBar = (props) => <img className='rounded-circle' src={avatarImg} alt='Avatar' width='75%' height='75%' />

const Body = (props) => {
  const info = [
    { fieldName: 'Full Name', value: 'Lương Quang Mạnh' },
    { fieldName: 'Date of Birth', value: 'May 8, 1998' },
    { fieldName: 'Hometown', value: 'Hai Duong City' },
    { fieldName: 'Occupation', value: 'Student at the University of Engineering & Technology - Vietnam National University, Hanoi' },
    { fieldName: 'Languages', value: 'Vietnamese, English' },
    { fieldName: 'Personalities', value: 'Reliable, studious, ambitious,...' },
    { fieldName: 'Interests', value: 'Technology, manga, music, digital design, photography, cinema,...'},
  ]
  return (
    <ColoredBox borderRadius='1rem' color='#f8f9fa' distributeX='left' width='100%' height='100%'>
      <div className='p-3'>
        <h1>About me</h1>
        <dl className="row mb-0">{
          info.map((field) => (
            <>
              <dt className="col-4 col-sm-3">{field.fieldName}</dt>
              <dd className="col-8 col-sm-9">{field.value}</dd>
            </>
          ))
        }</dl>
      </div>
    </ColoredBox>
  )
}


export default (props) => (
  <Section id='Profile'>
    <div className='container container-fluid'>
      <ContentFrame sideBar={<SideBar />} body={<Body />} />
    </div>
  </Section>
)

import React from 'react'

import Section from './section'
import contacts from '../../data/contacts.json'

export default () => (
  <Section id='intro' height='calc(100vh - 48px)'>
    <div className='text-center text-light'>
      <div className='row py-3'>
        <div className='col'>
          <h4 className='display-4'>
            <strong>LƯƠNG QUANG MẠNH</strong>
          </h4>
        </div>
      </div>
      <div className='row py-3'>
        <div className='col'>
          {contacts.map((logo, i) => (
            <a className='h1 mx-3 text-light' href={logo.href} key={i}>
              <ion-icon name={logo.iconName} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </Section>
)

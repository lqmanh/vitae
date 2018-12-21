import React from 'react'

import Section from './section'


const logos = [
  { href: 'https://www.facebook.com/luong.quangmanh85', iconName: 'logo-facebook' },
  { href: 'https://www.instagram.com/luong.quangmanh85', iconName: 'logo-instagram' },
  { href: 'mailto:luongquangmanh85@gmail.com', iconName: 'mail' },
  { href: 'https://github.com/lqmanh', iconName: 'logo-github' },
]


export default (props) => (
  <Section id='intro' height='calc(100vh - 48px)'>
    <div className='text-center text-light'>
      <div className='row py-3'>
        <div className='col'>
          <h4 className='display-4'><strong>LƯƠNG QUANG MẠNH</strong></h4>
        </div>
      </div>
      <div className='row py-3'>
        <div className='col'>{
          logos.map((logo) => (
            <a className='h1 mx-3' href={logo.href}>
              <ion-icon name={logo.iconName} />
            </a>
          ))
        }</div>
      </div>
    </div>
  </Section>
)

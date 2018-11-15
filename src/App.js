import React from 'react'

import Layout from './components/layout'
import Section from './components/sections'


export default (props) => (
  <Layout>
    <Section backgroundColor='#d32f2f' height='calc(100vh - 56px)'>
      <div className='container text-center text-white'>
        <div className='row py-3'>
          <div className='col'>
            <h4 className='display-4'><strong>LƯƠNG QUANG MẠNH</strong></h4>
          </div>
        </div>
        <div className='row py-3'>
          <div className='col'>
            <a className='h1 mx-3' href='https://www.facebook.com/luong.quangmanh85'>
              <ion-icon name="logo-facebook" />
            </a>
            <a className='h1 mx-3' href='https://www.instagram.com/luong.quangmanh85'>
              <ion-icon name="logo-instagram" />
            </a>
            <a className='h1 mx-3' href='mailto:luongquangmanh85@gmail.com'>
              <ion-icon name="mail" />
            </a>
            <a className='h1 mx-3' href='https://github.com/lqmanh'>
              <ion-icon name="logo-github" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  </Layout>
)

import React from 'react'

import Layout from './components/layout'
import { Intro, Profile, Skills, Achievements } from './components/section'


export default (props) => (
  <Layout>
    <Intro />
    <Profile />
    <Skills />
    <Achievements />
  </Layout>
)

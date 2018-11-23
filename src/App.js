import React from 'react'

import Layout from './components/layout'
import { Intro, Profile, Skills, Achievements, ThingsIUse } from './components/section'


export default (props) => (
  <Layout>
    <Intro />
    <Profile />
    <Skills />
    <Achievements />
    <ThingsIUse />
  </Layout>
)

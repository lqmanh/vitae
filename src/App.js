import React from 'react'

import Layout from './components/layout'
import { Achievements, Intro, Profile, Projects, Skills, ThingsIUse } from './components/section'


export default (props) => (
  <Layout>
    <Intro />
    <Profile />
    <Achievements />
    <Skills />
    <Projects />
    <ThingsIUse />
  </Layout>
)

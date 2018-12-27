import React from 'react'

import Layout from './components/layout'
import { Achievements, Intro, Profile, Projects, Skills } from './components/section'


export default (props) => (
  <Layout>
    <Intro />
    <Profile />
    <Achievements />
    <Skills />
    <Projects />
  </Layout>
)

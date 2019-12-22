import Layout from '../components/layout'
import { Achievements, Intro, Portfolio, Profile, Skills } from '../components/sections'

export default () => (
  <Layout>
    <Intro />
    <Profile />
    <Achievements />
    <Skills />
    <Portfolio />
  </Layout>
)

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import { storiesOf } from '@storybook/react'

import Box, { ColoredBox } from '../components/common/box'
import ContentFrame from '../components/common/content-frame'
import Section, { Intro, Profile, Skills } from '../components/section'
import TopBar from '../components/topbar'


storiesOf('Box', module)
  .add('without props', () => <Box />)
  .add('with size', () => <Box width='300px' height='200px'>Hello world</Box>)
  .add('with children in bottom right', () => (
    <Box width='300px' height='200px' distributeX='right' distributeY='bottom'>
      Hello world
    </Box>
  ))

storiesOf('Colored Box', module)
  .add('without props', () => <ColoredBox />)
  .add('with size', () => <ColoredBox color='#d32f2f' width='300px' height='200px'>Hello world</ColoredBox>)
  .add('with children in bottom right', () => (
    <ColoredBox color='#d32f2f' width='300px' height='200px' distributeX='right' distributeY='bottom'>
      Hello world
    </ColoredBox>
  ))

storiesOf('Content Frame', module)
  .add('without props', () => <ContentFrame />)
  .add('with content', () => <ContentFrame sideBar={<h5 className='mb-0'>Side Bar</h5>} body={<span>Line 1<br />Line 2</span>} />)


storiesOf('Section', module)
  .add('without props', () => <Section />)
  .add('with height', () => <Section height='480px'>Hello World</Section>)

storiesOf('Top Bar', module)
  .add('without props', () => <TopBar />)

storiesOf('App/sections/Intro')
  .add('without props', () => <Intro />)

storiesOf('App/sections/Profile')
  .add('without props', () => <Profile />)

storiesOf('App/sections/Skills')
  .add('without props', () => <Skills />)

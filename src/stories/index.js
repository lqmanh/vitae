import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import { storiesOf } from '@storybook/react'

import TopBar from '../components/topbar'
import Section from '../components/sections'


storiesOf('TopBar', module)
  .add('without props', () => <TopBar />)

storiesOf('Section', module)
  .add('without props', () => <Section />)
  .add('with children', () => <Section>Hello World</Section>)
  .add('with background color', () => <Section backgroundColor="#d32f2f">Hello World</Section>)

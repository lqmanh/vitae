import React from 'react'
import Carousel from 'nuka-carousel'
import * as V from 'victory'

import Section from './section'
import Box, { ColoredBox } from '../common/box'
import ContentFrame from '../common/content-frame'


const fields = [[
  { x: 'Database (MongoDB)', y: 85 },
  { x: 'Network Monitoring (Icinga2+SNMP)', y: 35 },
  { x: 'Web Backend (Node.js)', y: 60 },
  { x: 'Web Crawling (Scrapy)', y: 75 },
  { x: 'Web Frontend (React+Bootstrap)', y: 80 },
]]

const langs = [[
  { x: 'C++', y: 15 },
  { x: 'CSS', y: 65 },
  { x: 'HTML', y: 70 },
  { x: 'Javascript', y: 70 },
  { x: 'Markdown', y: 95 },
  { x: 'Python', y: 80 },
]]


const SideBar = (props) => (
  <Box className='px-0 pr-md-3' distributeX='right'>
    <h1 className='text-light mb-0'>SKILLS</h1>
  </Box>
)

const Chart = (props) => (
  <>
    <h3 className='text-center pt-3'>{props.caption}</h3>
    <V.VictoryChart polar>
      <V.VictoryGroup color='#d32f2f' style={{ data: { fillOpacity: 1 } }}>{
        props.data.map((item, i) => <V.VictoryArea key={i} data={item} />)
      }</V.VictoryGroup>
      <V.VictoryPolarAxis labelPlacement='vertical'
        style={{
          axis: { stroke: 'none' },
          grid: { stroke: 'black', opacity: 0.25 },
          tickLabels: { fontSize: 8 }
        }}
      />
      <V.VictoryPolarAxis dependentAxis axisAngle={90} domain={[0, 100]} labelPlacement='vertical'
        style={{
          axis: { stroke: 'none' },
          grid: { stroke: 'black', opacity: 0.25 },
          tickLabels: { fontSize: 8 }
        }}
      />
    </V.VictoryChart>
  </>
)

const FieldsChart = (props) => <Chart data={fields} caption='Fields with Major Tools I Use' />

const LanguagesChart = (props) => <Chart data={langs} caption='Languages' />

const Body = (props) => (
  <ColoredBox borderRadius='1rem' color='#f8f9fa' padding='0' width='100%' height='100%'>
    <Carousel autoplay={true} autoplayInterval='5000' disableKeyboardControls={true} wrapAround={true}>
      <FieldsChart />
      <LanguagesChart />
    </Carousel>
  </ColoredBox>
)


export default (props) => (
  <Section id='skills'>
    <div className='container container-fluid'>
      <ContentFrame sideBar={<SideBar />} body={<Body />} />
    </div>
  </Section>
)

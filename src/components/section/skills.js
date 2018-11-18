import React from 'react'
import Carousel from 'nuka-carousel'
import * as V from 'victory'

import Section from './section'
import Box, { ColoredPaddinglessBox } from '../common/box'
import ContentFrame from '../common/content-frame'


const langs = [[
  { x: 'C++', y: 15 },
  { x: 'CSS', y: 55 },
  { x: 'HTML', y: 60 },
  { x: 'Javascript', y: 60 },
  { x: 'Python', y: 80 },
]]

const frameworks = [[
  { x: 'Bootstrap (CSS)', y: 90 },
  { x: 'Click (Py)', y: 70 },
  { x: 'Next.js (JS)', y: 70 },
  { x: 'Node.js + Express (JS)', y: 55 },
  { x: 'Passport + JWT (JS)', y: 30 },
  { x: 'React (JS)', y: 85 },
  { x: 'Scrapy (Py)', y: 75 }
]]


const SideBar = (props) => (
  <Box className='p-5 p-md-3'>
    <h1 className='text-light m-0'>SKILLS</h1>
  </Box>
)

const Chart = (props) => (
  <>
    <h2 className='text-center' style={{ paddingTop: 32 }}>{props.caption}</h2>
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

const LanguagesChart = (props) => <Chart data={langs} caption='Languages' />

const FrameworksChart = (props) => <Chart data={frameworks} caption='Frameworks & Libraries' />

const Body = (props) => (
  <ColoredPaddinglessBox borderRadius='1rem' color='#f8f9fa' width='100%' height='100%'>
    <Carousel autoplay={true} autoplayInterval='5000' disableKeyboardControls={true} wrapAround={true}>
      <LanguagesChart />
      <FrameworksChart />
    </Carousel>
  </ColoredPaddinglessBox>
)


export default (props) => (
  <Section id='Skills'>
    <div className='container container-fluid'>
      <ContentFrame sideBar={<SideBar />} body={<Body />} />
    </div>
  </Section>
)

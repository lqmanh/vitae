import React from 'react'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'
import * as V from 'victory'

import Section from './section'
import Box, { ColoredBox } from '../common/box'
import ContentFrame from '../common/content-frame'
import HorizontalRule from '../common/horizontal-rule'


const fields = [[
  { x: 'Database (MongoDB)', y: 80 },
  { x: 'Network Monitoring (Icinga2+SNMP)', y: 35 },
  { x: 'Web Backend (Node.js+Express)', y: 55 },
  { x: 'Web Crawling (Scrapy)', y: 75 },
  { x: 'Web Frontend (React+Bootstrap)', y: 80 },
]]

const langs = [[
  { x: 'C++', y: 15 },
  { x: 'CSS', y: 70 },
  { x: 'HTML', y: 75 },
  { x: 'Javascript', y: 70 },
  { x: 'Python', y: 80 },
  { x: 'SQL', y: 55 },
]]

const SideBar = (props) => (
  <Box className='px-0 pt-0 pb-3 pr-md-3' distributeX='right'>
    <div>
      <h2 className='text-light text-right mb-0'>SKILLS & EXPERIENCE</h2>
      <HorizontalRule />
    </div>
  </Box>
)

const Chart = (props) => (
  <>
    <h4 className='text-center pt-4'>{props.caption}</h4>
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

const FieldsChart = (props) => <Chart data={fields} caption='Fields' />

const LanguagesChart = (props) => <Chart data={langs} caption='Languages' />

const SlideButton = styled.button`
  background-color: rgb(248, 249, 250);
  border: 0;
  color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  cursor: pointer;
  :hover {
    color: rgba(0, 0, 0, 0.7);
  }
`

const SlidePrev = ({ previousSlide }) => <SlideButton onClick={previousSlide}><ion-icon name="ios-arrow-back" /></SlideButton>

const SlideNext = ({ nextSlide }) => <SlideButton onClick={nextSlide}><ion-icon name="ios-arrow-forward" /></SlideButton>

const Body = (props) => (
  <ColoredBox borderRadius='1rem' color='#f8f9fa' padding='0' width='100%' height='100%'>
    <Carousel autoplay={true} autoplayInterval='5000' disableKeyboardControls={true} wrapAround={true}
      renderCenterLeftControls={SlidePrev} renderCenterRightControls={SlideNext}
    >
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

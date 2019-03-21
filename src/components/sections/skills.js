import React from 'react'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'
import * as V from 'victory'

import Section from './section'
import Box from '../common/box'
import ContentFrame from '../common/content-frame'
import HorizontalRule from '../common/horizontal-rule'
import { COLOR_PRIMARY } from '../../constants'
import { fields, langs } from '../../data/skills.json'

const SideBar = () => (
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
      <V.VictoryGroup color={COLOR_PRIMARY} style={{ data: { fillOpacity: 1 } }}>
        {props.data.map((item, i) => (
          <V.VictoryArea key={i} data={item} />
        ))}
      </V.VictoryGroup>
      <V.VictoryPolarAxis
        labelPlacement='vertical'
        style={{
          axis: { stroke: 'none' },
          grid: { stroke: 'black', opacity: 0.25 },
          tickLabels: { fontSize: 8 }
        }}
      />
      <V.VictoryPolarAxis
        dependentAxis
        axisAngle={90}
        domain={[0, 100]}
        labelPlacement='vertical'
        style={{
          axis: { stroke: 'none' },
          grid: { stroke: 'black', opacity: 0.25 },
          tickLabels: { fontSize: 8 }
        }}
      />
    </V.VictoryChart>
  </>
)

const FieldsChart = () => <Chart data={fields} caption='Fields' />

const LanguagesChart = () => <Chart data={langs} caption='Languages' />

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

const SlidePrev = ({ previousSlide }) => (
  <SlideButton onClick={previousSlide}>
    <ion-icon name='ios-arrow-back' />
  </SlideButton>
)

const SlideNext = ({ nextSlide }) => (
  <SlideButton onClick={nextSlide}>
    <ion-icon name='ios-arrow-forward' />
  </SlideButton>
)

const Body = () => (
  <Box className='p-0' width='100%' height='100%' borderRadius='1rem' color='#f8f9fa'>
    <Carousel
      autoplay={true}
      autoplayInterval='5000'
      disableKeyboardControls={true}
      wrapAround={true}
      renderCenterLeftControls={SlidePrev}
      renderCenterRightControls={SlideNext}
    >
      <FieldsChart />
      <LanguagesChart />
    </Carousel>
  </Box>
)

export default () => (
  <Section id='skills'>
    <ContentFrame sideBar={<SideBar />} body={<Body />} />
  </Section>
)

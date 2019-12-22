import Section from './section'
import Box from '../common/box'
import ContentFrame from '../common/content-frame'
import HorizontalRule from '../common/horizontal-rule'
import achievements from '../../data/achievements.json'

const SideBar = () => (
  <Box className='px-0 pt-0 pb-3 pr-md-3' distributeX='right'>
    <div>
      <h2 className='text-light text-right mb-0'>ACHIEVEMENTS</h2>
      <HorizontalRule />
    </div>
  </Box>
)

const Body = () => (
  <Box
    className='p-4'
    width='100%'
    height='100%'
    borderRadius='1rem'
    color='#f8f9fa'
    distributeX='left'
  >
    <ul className='list-unstyled mb-0'>
      {achievements.map((type, i) => (
        <li className={i === achievements.length - 1 ? '' : 'mb-3'} key={i}>
          <h4>{type.name}</h4>
          <ol>
            {type.value.map((achiev, j) => (
              <li key={j}>{achiev}</li>
            ))}
          </ol>
        </li>
      ))}
    </ul>
  </Box>
)

export default () => (
  <Section id='achievements'>
    <ContentFrame sideBar={<SideBar />} body={<Body />} />
  </Section>
)

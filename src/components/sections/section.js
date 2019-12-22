import Box from '../common/box'
import { COLOR_PRIMARY } from '../../constants'

export default (props) => (
  <Box
    className='p-0 pt-md-5'
    id={props.id}
    width='100%'
    height={props.height}
    color={COLOR_PRIMARY}
  >
    {props.children}
  </Box>
)

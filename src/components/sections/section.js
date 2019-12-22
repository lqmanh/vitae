import Box from '../common/box'
import { GRADIENT_PRIMARY } from '../../constants'

export default (props) => (
  <Box
    className={`p-0 ${props.noPaddingTop ? '' : 'pt-md-5'}`}
    id={props.id}
    width='100%'
    height={props.height}
    color={GRADIENT_PRIMARY}
  >
    {props.children}
  </Box>
)

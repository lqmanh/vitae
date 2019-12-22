import styled from 'styled-components'
import avatarImg from '../static/avatar.jpg'

const Avatar = styled.img`
  max-width: 300px;
  max-height: 300px;
`

export default (
  <Avatar className='rounded-circle' src={avatarImg} width='100%' height='100%' />
)

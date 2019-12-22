import styled from 'styled-components'

const Avatar = styled.img`
  max-width: 300px;
  max-height: 300px;
`

export default () => (
  <Avatar className='rounded-circle' src='/avatar.jpg' width='256' height='256' />
)

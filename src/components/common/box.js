import styled from 'styled-components'

const Box = (props) => {
  let distributeX = 'justify-content-center'
  if (props.distributeX === 'left') distributeX = 'justify-content-start'
  else if (props.distributeX === 'right') distributeX = 'justify-content-end'

  let distributeY = 'align-items-center'
  if (props.distributeY === 'top') distributeY = 'align-items-start'
  else if (props.distributeY === 'bottom') distributeY = 'align-items-end'

  return (
    <div
      className={`d-flex ${distributeX} ${distributeY} ${props.className}`}
      id={props.id}
    >
      {props.children}
    </div>
  )
}

export default styled(Box)`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.color || 'transparent'};
  border-radius: ${(props) => props.borderRadius || '0'};
`

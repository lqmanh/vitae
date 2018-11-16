import React from 'react'
import styled from 'styled-components'


const Box = (props) => {
  let distributeX, distributeY
  if (props.distributeX === 'left') distributeX = 'justify-content-start'
  else if (props.distributeX === 'right') distributeX = 'justify-content-end'
  else distributeX = 'justify-content-center'
  if (props.distributeY === 'top') distributeY = 'align-items-start'
  else if (props.distributeY === 'bottom') distributeY = 'align-items-end'
  else distributeY = 'align-items-center'

  return (
    <div className={`d-flex p-3 ${distributeX} ${distributeY} ${props.className}`} id={props.id}>
      {props.children}
    </div>
  )
}

const StyledBox = styled(Box)`
  border-radius: ${(props) => props.borderRadius};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`

const ColoredBox = styled(StyledBox)`
  background-color: ${(props) => props.color || 'gray'};
`

const PaddinglessBox = styled(StyledBox)`
  padding: 0;
`


export default StyledBox
export { ColoredBox, PaddinglessBox }

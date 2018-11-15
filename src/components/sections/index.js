import React from 'react'
import styled from 'styled-components'


const Section = (props) => (
  <div className={`d-flex flex-column justify-content-center ${props.className}`}>
    {props.children}
  </div>
)


export default styled(Section)`
  background-attachment: ${(props) => props.backgroundAttachment || 'scroll'};
  background-color: ${(props) => props.backgroundColor || 'lightgray'};
  background-image: ${(props) => props.backgroundImage};
  background-position: ${(props) => props.backgroundPosition || 'center center'};
  background-size: ${(props) => props.backgroundSize || 'cover'};
  height: ${(props) => props.height};
`

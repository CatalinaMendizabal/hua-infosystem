import React from 'react'
import styled from "styled-components";

interface Props {
    height:Number,
    width:Number
}

const IconStyle = styled.img<Props>`
    height: ${(p) => `${p.height}px`};
    width: ${(p) => `${p.width}px`};
`
export const Icon = ({svg, height, width} : {svg:string, height:Number, width:Number}) => {
    return <IconStyle src={svg} height={height} width={width}></IconStyle>
}

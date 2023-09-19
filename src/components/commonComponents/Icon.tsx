import React from 'react'
import styled from "styled-components";

interface Props {
    height:Number,
    width:Number,
    rotation: Number
}

const IconStyle = styled.img<Props>`
    height: ${(p) => `${p.height}px`};
    width: ${(p) => `${p.width}px`};
    rotate: ${(p) => `${p.rotation}deg`};
`
export const Icon = ({svg, height, width, rotation} : {svg:string, height:Number, width:Number, rotation: Number}) => {
    return <IconStyle src={svg} height={height} width={width} rotation={rotation}></IconStyle>
}

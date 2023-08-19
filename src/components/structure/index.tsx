import React from "react";
import Navbar from "../navbar";
import {StyledStructure} from "./styles";

interface StructureProps {
    children: React.ReactNode;
}
const Structure = (props: StructureProps) => {

    return (
        <StyledStructure>
            <Navbar />
            {props.children}
        </StyledStructure>
    )
}

export default Structure;
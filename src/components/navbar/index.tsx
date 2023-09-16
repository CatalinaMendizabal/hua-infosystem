import React from "react";
import {
    StyledNavbar,
    StyledNavbarLogo,
    StyledNavbarTitle,
    // StyledOptionButtonsContainer,
    StyledLogoAndName
} from "./style";
import {StyledButton} from "../commonComponents/buttonStyle";
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <StyledNavbar>
            <StyledLogoAndName>
                <StyledNavbarLogo/>
                <StyledNavbarTitle>
                    | Info System
                </StyledNavbarTitle>
            </StyledLogoAndName>
            <StyledButton>
                <Link to={'/record'}>Record</Link>
            </StyledButton>
            <StyledButton>
                <Link to={'/results'}>Results</Link>
            </StyledButton>
        </StyledNavbar>
    )
}

export default Navbar;

import React from "react";
import {
    StyledNavbar,
    StyledNavbarLogo,
    StyledNavbarTitle,
    // StyledOptionButtonsContainer,
    StyledLogoAndName
} from "./style";

const Navbar = () => {

    return (
        <StyledNavbar>
            <StyledLogoAndName>
                <StyledNavbarLogo/>
                <StyledNavbarTitle>
                    | Info System
                </StyledNavbarTitle>
            </StyledLogoAndName>
            {/*<StyledOptionButtonsContainer>
                <button>Home</button>
            </StyledOptionButtonsContainer>*/}
        </StyledNavbar>
    )
}

export default Navbar;
import React from "react";
import {
    StyledNavbar,
    StyledNavbarLogo,
    StyledNavbarTitle,
    // StyledOptionButtonsContainer,
    StyledLogoAndName
} from "./style";
import {InvertedStyleButton} from "../commonComponents/buttonStyle";
import {useNavigate} from "react-router-dom";
import {NavigationButtonContainer} from "../structure/styles";

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <StyledNavbar>
            <StyledLogoAndName onClick={() => navigate("/")}>
                <StyledNavbarLogo/>
                <StyledNavbarTitle>
                    | Info System
                </StyledNavbarTitle>
            </StyledLogoAndName>
            <NavigationButtonContainer>
                <div>
                    <InvertedStyleButton onClick={() => navigate("/record")}>
                        Record
                    </InvertedStyleButton>
                </div>
                <div>
                    <InvertedStyleButton onClick={() => navigate("/results")}>
                        Results
                    </InvertedStyleButton>
                </div>
            </NavigationButtonContainer>
        </StyledNavbar>
    )
}

export default Navbar;

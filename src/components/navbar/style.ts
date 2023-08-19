import styled from "styled-components";

export const StyledNavbar = styled.div`
  height: 70px;
  width: 100%;
  background-color: ${(props) => props.theme.infoBlue};
  filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.05));
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`

export const StyledLogoAndName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const StyledNavbarLogo = styled.button`
  background-image: url("https://www.hospitalaustral.edu.ar/wp-content/themes/hua/img/logo_white.png?x84660");
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 100px;
  width: 140px;
  margin-left: 30px;
  margin-right: 20px;
  cursor: pointer;
  border: none;
`;

export const StyledNavbarTitle = styled.div`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.1px;
  font-family: "Gotham", sans-serif;
  color: ${(props) => props.theme.infoWhite};
`;

/*
export const StyledOptionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`;*/

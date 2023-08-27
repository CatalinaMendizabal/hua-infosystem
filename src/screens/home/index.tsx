import {StyledButton, StyledContainer} from "./styles";
import Structure from "../../components/structure";
import React from "react";
import {useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()

    return (
        <Structure>
            <StyledContainer>
                <h1>Welcome</h1>
                <StyledButton onClick={() => navigate("/record")}>Record</StyledButton>
                <StyledButton onClick={() => navigate("/results")} >Results</StyledButton>
            </StyledContainer>
        </Structure>
    );
}

export default Home;

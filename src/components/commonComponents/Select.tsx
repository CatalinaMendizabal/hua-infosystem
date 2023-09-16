import React from 'react';
import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 300px;
`

interface Props {
    values: string[],
    setSelected: (v:string) => void
}
const Select = ({values, setSelected}:Props) => {
    return (
        <StyledSelect onChange={(e) => setSelected(e.target.value)}>
            {values.map((v) => <option value={v}>{v}</option>)}
        </StyledSelect>
    );
};

export default Select;

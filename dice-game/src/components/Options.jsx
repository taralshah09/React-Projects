import styled from "styled-components";
import { useState } from "react";
const Options = ({ boxArray, selectedNumber, setSelectedNumber, msg}) => {
  return (
    <BoxContainer>
        <Error valid={msg}>{msg}</Error>
      <div className="boxes">
        {boxArray.map((value, i) => (
          <Box
            isselected={value === selectedNumber}
            key={i}
            onClick={() => {
              setSelectedNumber(value);
            }}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select the number</p>
    </BoxContainer>
  );
};

const Error = styled.h3`
  color: red;
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 14px;
  position: absolute;
  top: 100%;
  right: -200%;
  transition: right 0.3s ease-out;
  right: ${(props)=>(props.valid ? "-4%" : "-200%" )};
`

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-end;
  position: relative;

  .boxes {
    display: flex;
    gap: 5px;
  }

  p {
    font-size: 18px;
    font-weight: 600;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  font-size: 20px;
  font-weight: 600;
  transition: 0.3s;
  background: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (props.isselected ? "white" : "black")};
  transform: translateY(0);
  &:hover {
    background-color: #e9c3fe;
    cursor: pointer;
  }
`;


export default Options;

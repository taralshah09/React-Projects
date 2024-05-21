import { useState } from "react";
import styled from "styled-components";
import Rules from "./Rules";

const RollDice = ({currentDice,rollDice,resetScore,rules,setRules}) => {
  
  return (
    <RollDiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice_img" />
      </div>

      <p>Click the dice to roll</p>
      <ResetButton onClick={()=>resetScore()}>Reset Score</ResetButton>
      <ShowRulesButton onClick={()=>{
        console.log("Rules : " + rules)
        return setRules(prev => !prev)
      }}>Show Rules</ShowRulesButton>
      <Rules visible={rules}></Rules>

    </RollDiceContainer>
  );
};

export default RollDice;

const RollDiceContainer = styled.div`
  width: 350px;
  height: 500px;
  padding: 15px;
  /* border: 1px solid black; */
  margin: auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  gap: 15px;

  .dice{
    width: 100%;
    cursor: pointer;
  }

  .dice img{
    width: 100%;
  }

  p {
    text-align: center;
    font-weight: 600;
    font-size: 18px;
  }
`;

const ResetButton = styled.button`
  width: 100%;
  color: white;
  background-color: black;
  border: 1px solid transparent;
  outline: 0;
  border-radius: 5px;
  padding: 15px;
  font-size: 16px;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
const ShowRulesButton = styled.button`
  width: 100%;
  color: black;
  background-color: white;
  border: 1px solid black;
  outline: 0;
  border-radius: 5px;
  padding: 15px;
  font-size: 16px;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

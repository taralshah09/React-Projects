import styled from "styled-components";
import { useState } from "react";
import TotalScore from "./TotalScore";
import Options from "./Options";
import RollDice from "./RollDice";
import Rules from "./Rules";


const Gameplay = () => {
  
  //Already existed
  const [isSelected, setIsSelected] = useState(true);
  const [score,setScore] = useState(0)
  const [msg,setMsg] = useState()
  const [rulesBox,setRulesBox] = useState(false)

  // Options
  const boxArray = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();


  //RollDice
  const [currentDice, setCurrentDice] = useState(1);
  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 6 + 1);
    return random;
  };

  const rollDice = () => {
    setMsg((prev)=>(selectedNumber ? "" : "Please select any number!"))
    // if(!selectedNumber){
    //   setMsg(prev=>"Please select any number!")
    //   return;
    // }
    if(!selectedNumber){
      return;
    }
    const randomNumber = generateRandomNumber();
    setCurrentDice(randomNumber);
    // console.log("Current Dice : "+ currentDice)
    if(randomNumber === selectedNumber){
      setScore(prev=>prev+selectedNumber);
    }
    else{
      setScore(prev=>prev-2);
    }
    

    setSelectedNumber();

    
  };

  // For reseting the score
  const resetScore = () =>{
    setScore(prev=>0);
    setMsg(prev=>"");
  }

  // For showing the rules btn
  const [rules,setRules] = useState(false);
  
  return (
    <GameplayContainer>
      <Header>
        <TotalScore score={score} setScore={setScore}/>
        <Options boxArray={boxArray} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} msg={msg}/>
      </Header>
      <RollDice currentDice={currentDice} rollDice={rollDice} resetScore={resetScore} rules={rules} setRules={setRules}/>
      
    </GameplayContainer>
  );
};

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 45px 5px 45px;
`;

const ShowRules = styled.div`
  width : 500px;
  height : 200px;
  border-radius: 5px;
  background-color: lavender;
  position: absolute;
  right: 1%;
  top: 62%;
`

const GameplayContainer = styled.div`
  width : 100%;
  height : 100vh;
  overflow: hidden;
  position: relative;
`


export default Gameplay;

import styled from "styled-components";

const Startpage = (props) => {
  return (
    <div className="container">
      <StartPageContainer>
        <img src="images/dices.png" alt="" />
        <Details>
          <Title>Dice Game</Title>
          <PlayGameBtn onClick={props.toggle}>Play Game</PlayGameBtn>
        </Details>
      </StartPageContainer>
    </div>
  );
};

export default Startpage;

const StartPageContainer = styled.div`
  width: 1180px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  user-select: none;
`;

const Details = styled.div`
  width: 100%;
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  /* padding-right: 5rem; */
`;

const Title = styled.h2`
  font-size: 5.5rem;
  margin: 0;
`;

const PlayGameBtn = styled.button`
    background-color:black;
    color: white;
    padding: 15px;
    border: 0;
    outline: 0;
    border-radius: 5px;
    width: 60%;
    font-size: 19px;
    font-weight: 600;
    transition: 0.3s;
    &:hover{
        background-color: rgba(0,0,0,0.8);
        cursor: pointer;
    }
`
import styled from "styled-components";

const Rules = ({visible}) => {
  return (
    <RulesContainer visibility={visible}>
      <h2>How to play dice game</h2>
      <ul className="text">
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </li>
        <li>if you get wrong guess then 2 point will be dedcuted </li>
      </ul>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  position: absolute;
  right: 1%;
  top: 60%;
  max-width: 500px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  visibility: ${(props)=>(props.visibility) ? "visible":"hidden"};
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
    margin-left: 15px;

  }
  .text li{
    font-size: 15px;
}
  .text li::after{
    content: ' .';
    font-weight: 600;
   
}

`;

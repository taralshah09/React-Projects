import styled from "styled-components"

const TotalScore = ({score,setScore}) => {

  
  return (
    <Div>
      <H2>{score}</H2>
      <P>Total Score</P>
    </Div>
  )
}
const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const H2 = styled.h2`
    font-size: 60px;
    line-height: 50px;
`
const P = styled.p`
    font-size: 18px;
    font-weight: 500;
`
export default TotalScore

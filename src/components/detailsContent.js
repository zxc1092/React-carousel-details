import styled from 'styled-components'

const StyledDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1250px;
  padding: 0 15px;

  h2 {
    font-size: 20px;
    color: turquoise;
    margin-top: 0;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: white;
    margin: 0 0 10px;
    line-height: 1.4;
  }
`;

function DetailsContent({car}) {
  return (
    <StyledDetailsContent>
      <p>{car.descCopy}</p>
      <h2>Why now is the time to buy one:</h2>
      <p>{car.whyCopy}</p>
      <h2>Pro’s:</h2>
      <p>{car.proCopy}</p>
      <h2>Con’s:</h2>
      <p>{car.conCopy}</p>
      <h2>Which one should I buy?:</h2>
      <p>{car.buyCopy}</p>
    </StyledDetailsContent>
  )
}

export default DetailsContent;

import styled from 'styled-components'
import { devices } from '../styles/global'

const StyledHero = styled.div`
  background: #445058;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.small? "20px": "100px"} 20px;

  h1 {
    font-size: 30px;
    color: turquoise;
    text-align: center;
    margin-top: 0;
    margin-bottom: 10px;

    ${devices.md} {
      font-size: 50px;
    }
  }

  p {
    font-size: 16px;
    color: white;
    text-align: center;
    max-width: 880px;
    margin: 0;
  }
`;

function Hero({title, description, small}) {
  return (
    <StyledHero small={small}>
      <h1>{title}</h1>
      <p>{description}</p>
    </StyledHero>
  )
}

export default Hero;

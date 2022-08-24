import styled from 'styled-components'
import { Link, useParams } from "react-router-dom";
import { cars } from "../data/data.js";

import Hero from '../components/hero'
import Gallery from '../components/gallery'
import DetailsContent from '../components/detailsContent'

const StyledDetails = styled.div`
  display: block;
  max-width: 1250px;
  margin: 0 auto;

  > a {
    padding: 20px;
    display: block;
    color: turquoise;
    text-decoration: none;
    position: relative;

    &:after {
      content: '';
      border: solid turquoise;
      border-width: 0 1px 1px 0;
      display: inline-block;
      border-radius: 1px;
      position: absolute;
      width: 10px;
      height: 10px;
      box-sizing: border-box;
      top: 39%;
      left: 0;
      transform: rotate(135deg) translateY(-50%);
    }
  }
`;


export default function Details() {
  const { id } = useParams();
  const car = cars[id];
  return (
    <>
      <Hero title={car.name} small/>
      <StyledDetails>
        <Link to={`/`}>
          Back to Home
        </Link>
        <Gallery imgs={car.imgs}/>
        <DetailsContent car={car}/>
      </StyledDetails>
    </>
  )
}

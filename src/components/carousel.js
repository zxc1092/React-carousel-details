import * as React from 'react'
import styled,  {css} from 'styled-components'
import { Link } from "react-router-dom";
import { cars } from '../data/data'
import { devices } from '../styles/global'

const StyledCarousel = styled.div`
  display: flex;
  position: relative;
  padding: 20px 40px 20px;
  max-width: 1250px;
  margin: 0 auto;
  width: 100%;
`

const CarouselArrow = styled.span`
  position: absolute;
  padding: 25px;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  ${props => props.right && css`
    right: 10px;
  `}

  ${props => props.left && css`
    left: 0;
  `}

  &:after {
    content: '';
    border: solid ${props => props.disabled?'#445058':'turquoise'};
    border-width: 0 10px 10px 0;
    display: inline-block;
    border-radius: 10px;
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    top: 0;
    left: 0;

    ${props => props.right && css`
      right: 10px;
      transform: rotate(-45deg);
    `}

    ${props => props.left && css`
      left: 10px;
      transform: rotate(135deg);
    `}
  }
`

const CarouselDots = styled.ul`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid turquoise;
    background-color: #445058;
    margin: 0 10px;
    cursor: pointer;

    &.active {
      background-color: turquoise;
    }
  }
`

const CarouselVisor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  width: 100%;
`

const CarouselSlider = styled.div.attrs(props => ({
  style: {
    transform: `translateX(-${props.transform}px`,
  },}))`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  list-style: none;
  padding: 0;
  transform: translateX(-${props => props.transform}px);

  li {
    width: calc(100vw - 80px);
    margin-right: 20px;
    padding: 10px;
    background-color: #445058;
    border-radius: 10px;

    ${devices.sm} {
      width: calc((100vw - 100px) / 2);
    }

    ${devices.md} {
      width: calc((100vw - 120px) / 3);
    }

    ${devices.lg} {
      width: calc((100vw - 140px) / 4);
    }

    ${devices.xl} {
      width: calc((1250px - 140px) / 4);
    }

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    width: 100%;
    color: white;
    text-decoration: none;
    line-height: 1.4;
    text-align: center;
  }

  img {
    width: 100%;
  }

  h2 {
    font-size: 14px;
  }

  p {
    font-size: 12px;
  }
`

function Carousel() {
  const visorRef = React.useRef(null);
  const sliderRef = React.useRef(null);
  const [transform, setTransform] = React.useState(0)
  const [position, setPosition] = React.useState(0)
  const [layoutState, setLayoutState] = React.useState({
    sliderWidth: 0,
    visorWidth: 0,
    transformLimiter: 0,
    maxMovements: 0,
  })

  function arrowEvent(direction) {
    if(direction === 'left') {
      setPosition(prevPos => prevPos? prevPos - 1: 0)
    }

    if(direction === 'right') {
      if(position + 1 <= layoutState.maxMovements) {
        setPosition(prevPos => prevPos + 1)
      }
    }
  }

  React.useEffect(() => {
    const nextTransformValue = position * layoutState.visorWidth
    if(nextTransformValue < 0) {
      setTransform(0)
    } else if(position >= layoutState.maxMovements) {
      setTransform(layoutState.transformLimiter)
    } else {
      setTransform(nextTransformValue)
    }
  }, [position, layoutState])

  React.useEffect(() => {
    function sliderMovement() {
      const sliderWidth = sliderRef.current ? sliderRef.current.offsetWidth + 20 : 0;
      const visorWidth = visorRef.current ? visorRef.current.offsetWidth + 20 : 0;
      setLayoutState({
        sliderWidth: sliderWidth,
        visorWidth: visorWidth,
        transformLimiter: sliderWidth - visorWidth,
        maxMovements: Math.ceil(sliderWidth / visorWidth) - 1,
      })
    }
    window.addEventListener('resize', sliderMovement);
    sliderMovement();
    return () => window.removeEventListener('resize', sliderMovement);
  }, [])



  function CarouselItem() {
    return (
      Object.keys(cars).map(car => (
        <li key={car}>
          <Link to={`/details-${car}`}>
            <img alt="car" src={cars[car].imgs[0].src}/>
            <h2>{cars[car].name}</h2>
            <p>{cars[car].whyCopy}</p>
          </Link>
        </li>
      ))
    )
  }

  return (
    <StyledCarousel>
      <CarouselArrow left onClick={() => arrowEvent('left')} disabled={position === 0}></CarouselArrow>
      <CarouselArrow right onClick={() => arrowEvent('right')} disabled={position === layoutState.maxMovements}></CarouselArrow>
      <CarouselDots>
        {Array.from({length:layoutState.maxMovements+1}, (_, i) => <li key={i} className={i === position?'active': ''} onClick={() => setPosition(i)}></li>)}
      </CarouselDots>
      <CarouselVisor ref={visorRef}>
        <CarouselSlider ref={sliderRef} transform={transform}>
          <CarouselItem />
        </CarouselSlider>
      </CarouselVisor>
    </StyledCarousel>
  )
}

export default Carousel;

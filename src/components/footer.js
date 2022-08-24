import styled from 'styled-components'

const StyledFooter = styled.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 10px;
  background-color: turquoise;
  color: black;

  span {
    max-width: 1250px;
    margin: 0 auto;
    display: block;
  }
`;

function Footer({car}) {
  return (
    <StyledFooter>
      	<span>&copy; 2021</span>
    </StyledFooter>
  )
}

export default Footer;

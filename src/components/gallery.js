import * as React from 'react'
import styled from 'styled-components'

const StyledGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const StyledGalleryItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  list-style: none;
  padding: 0;
  margin:0 0 40px;

  li {
    width: 20%;
    padding: 0 10px;
    cursor: pointer;
  }

  img {
    width: 100%;
  }
`;

function Gallery({imgs}) {
  const [currentImg, setCurrentImg] = React.useState(imgs.length?imgs[0].src: "")
  return (
    <StyledGallery>
      <img alt="car" src={currentImg}/>
      <StyledGalleryItems>
        {imgs.map(img => (
          <li key={img.alt} onClick={() => setCurrentImg(img.src)}>
            <img alt={img.alt} src={img.src}/>
          </li>
        ))}
      </StyledGalleryItems>
    </StyledGallery>
  )
}

export default Gallery;

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import "../css/destinosCarrusel.css"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/mendozaHD.jpeg"
          alt="Mendoza"
        />
        <Carousel.Caption>
          <h3>Mendoza</h3>
          <p>Tierra del sol y del buen vino.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/saltaHD.jpeg"
          alt="Salta"
        />

        <Carousel.Caption>
          <h3>Salta</h3>
          <p>Los paisajes mas coloridos de la Argentina.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/iguazuHD.jpeg"
          alt="Iguazu"
        />

        <Carousel.Caption>
          <h3>Iguazú</h3>
          <p>
            Majestuosas Cataratas
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}



export default ControlledCarousel
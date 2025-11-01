import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  // Dynamic carousel items data
  const carouselItems = [
    {
      id: 1,
      image: '/add3.png',
      // title: 'First Slide',
      // description: 'This is the description for the first slide.'
    },
    {
      id: 2,
      image: '/add1.png',
      // title: 'Second Slide',
      // description: 'This is the description for the second slide.'
    },
    {
      id: 3,
      image: '/add2.png',
      // title: 'Third Slide',
      // description: 'This is the description for the third slide.'
    },
    {
      id: 4,
      image: '/advertisementbanner1.jpg',
      // title: 'Third Slide',
      // description: 'This is the description for the third slide.'
    }
  ];

  return (
    <div className="slider-container">
      <Carousel interval={1000} style={{ marginTop:'0px' }}>

        {carouselItems.map(item => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.image}
              alt={item.title}
              style={{

                height: '400px',

                borderRadius: '0px'
              }}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div style={{ height: '4px', backgroundColor: '#ffc107' }}></div>
    </div>

  );
};

export default Slider;

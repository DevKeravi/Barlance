import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import useWidth from '../hooks/useWidth';
import { IMG_URL } from '../src/global-define';

const MainCarousel = () => {
  const width = useWidth();
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (width === 'P') {
      setStyle({ height: '500px' });
    } else if (width === 'T') {
      setStyle({ height: '400px' });
    } else {
      setStyle({ height: '300px' });
    }
  }, [width]);
  return (
    <Carousel
      fade
      indicators={false}
      prevIcon={false}
      nextIcon={false}
      interval={3000}
    >
      <Carousel.Item>
        <img style={style} src={`${IMG_URL}9.jpeg`} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={style} src={`${IMG_URL}11.jpeg`} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={style} src={`${IMG_URL}8.jpeg`} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={style} src={`${IMG_URL}7.jpeg`} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={style} src={`${IMG_URL}5.jpeg`} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={style} src={`${IMG_URL}4.jpeg`} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={style} src={`${IMG_URL}1.jpeg`} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
};
export default MainCarousel;

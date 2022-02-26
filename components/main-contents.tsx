import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useWidth from '../hooks/useWidth';
import MainCarousel from './main-carousel';

const MainContents = () => {
  const width = useWidth();

  const [img_width, setImgWidth] = useState<number>();
  const [img_height, setImgHeight] = useState<number>();

  useEffect(() => {
    if (width === 'P') {
      setImgHeight(300);
      setImgWidth(300);
    } else {
      setImgHeight(200);
      setImgWidth(200);
    }
  }, [width]);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <div>
        <img
          src={'/logo/logo_transparent.png'}
          alt="barlance"
          style={{
            width: img_width,
            height: img_height,
            marginBottom: '2rem',
            marginTop: '2rem',
          }}
        />
      </div>
      <div>
        <MainCarousel />
      </div>
    </div>
  );
};
export default MainContents;

import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { ImInstagram } from 'react-icons/im';
import useWidth from '../hooks/useWidth';
import { useRouter } from 'next/router';

const Footer = () => {
  const width = useWidth();
  const router = useRouter();
  return (
    <div
      style={
        width === 'P'
          ? {
              textAlign: 'center',
              position: 'absolute',
              top: '48%',
              left: '70%',
              color: '#fffff0',
              padding: '40px',
              zIndex: '1',
            }
          : {
              textAlign: 'center',
              marginTop: '3rem',
              marginBottom: '2.5rem',
              color: '#fffff0',
            }
      }
    >
      <a
        target="_blank"
        href="https://www.instagram.com/balance_seoul/?utm_medium=copy_link"
        rel="noopener noreferrer"
        style={{ color: 'white', textDecoration: 'none' }}
      >
        <div>
          <ImInstagram
            style={width === 'P' ? { fontSize: '64px' } : { fontSize: '40px' }}
          />
        </div>
        <div style={{ marginTop: '5px' }}>Instagram</div>
      </a>
      <div
        style={
          width === 'P'
            ? { marginTop: '32px' }
            : { marginTop: '32px', fontSize: '0.9rem' }
        }
      >
        <div>연남동 역전할맥 골목 씨스루 카페</div>
        <div>낭만반점 반대편 단단 이자카야 1.5층</div>
        <div style={{ marginBottom: '32px' }}>
          대충이와 함식이의 인생이 <br /> 담겨있는 아주 멋진가게
        </div>
        <div>서울특별시 마포구 동교로 266-5 1층</div>
        <div>Tel. 010-8441-4846</div>
        <div>대관 가능 합니다.</div>
      </div>
    </div>
  );
};
export default Footer;

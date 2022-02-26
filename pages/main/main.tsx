import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../components/footer';
import Gnb from '../../components/gnb';
import MainContents from '../../components/main-contents';
import styled from 'styled-components';
import Neon from '../../components/neon';
import Flux from '../../components/flux';
import useWidth from '../../hooks/useWidth';

const ContainerWrapper = styled(Container)`
  background: rgb(84, 78, 91);
  background: linear-gradient(
    0deg,
    rgba(84, 78, 91, 1) 0%,
    rgba(22, 21, 19, 1) 25%
  );
`;

const Main = () => {
  const width = useWidth();
  return (
    <ContainerWrapper fluid style={width === 'P' ? { height: '100vh' } : {}}>
      <Row>
        <Col>
          <MainContents />
        </Col>
      </Row>
      <Row>
        <Col>
          <Neon />
        </Col>
      </Row>
      <Row>
        <Col>
          <Flux />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </ContainerWrapper>
  );
};
export default Main;

import { Row, Col, Card, CardBody } from 'reactstrap';
import Logo from './maleculas/dropdown';

const Navbar = () => {
  return (
    <Card
      style={{
        margin: '0.5rem',
        WebkitBoxShadow: '-3px 8px 8px 0px rgba(34, 60, 80, 0.2)',
        MozBoxShadow: '-3px 8px 8px 0px rgba(34, 60, 80, 0.2)',
        boxShadow: '-3px 8px 8px 0px rgba(34, 60, 80, 0.2)',
        background: 'rgb(2,0,36)',
        background:
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(47,47,128,1) 37%, rgba(35,132,152,1) 99%)',
      }}
    >
      <CardBody>
        <Row>
          <Col sm="9" className="text-light">
            <h4 className="mt-3">JK.Movie Фильмы</h4>
            <p>главнаяновоститоп порталафильмысериалыонлайн-просмотрстол заказов</p>
          </Col>
          <Col sm="1"></Col>
          <Col sm="2" className="d-flex justify-content-evenly align-items-center text-light">
            <h5> Jamshidbek Kobilov </h5>
            <Logo />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Navbar;

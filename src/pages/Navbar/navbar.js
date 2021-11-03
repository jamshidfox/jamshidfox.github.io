import { Row, Col } from 'reactstrap';
import Logo from "./maleculas/dropdown"

    
    const Navbar = () => {
  
        return ( 
            <nav className = "border bg-success">
                <Row>
                    <Col sm = "9" className = "text-light">
                        <h4 className = "mt-3 mr-2">JK.Movie Фильмы</h4>
                        <p>главнаяновоститоп порталафильмысериалыонлайн-просмотрстол заказов</p>
                    </Col>
            <Col sm="1">
            </Col>
                    <Col sm = '2' className = "d-flex justify-content-evenly align-items-center text-light">
                         <h5 > Jamshidbek Kobilov </h5>
                           <Logo/>
                    </Col>
                </Row>
            </nav>
     );
}
 
export default Navbar;
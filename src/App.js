import React from 'react';
import Routing from './route/Route';
import Navbar from './pages/Navbar/navbar';
import Sidebar from './pages/Sidebar/sidebar';
import { Row, Col } from 'reactstrap';
import Login from './pages/login/login';
import './App.css';
///redux
import { useSelector } from 'react-redux';
function App() {
  const isAuthorized = useSelector((state) => state.isAuthorized.value);
  console.log(isAuthorized);
  if (isAuthorized === true) {
    return (
      <div id="app-container">
        <Row>
          <Col sm="12">
            <Navbar />
          </Col>
        </Row>
        <Row>
          <Col sm="10">
            <Routing />
          </Col>
          <Col sm="2">
            <Sidebar />
          </Col>
        </Row>
      </div>

      // <ValidationOnChange />
    );
  } else {
    return <Login />;
  }
}
// Jamshidbek Kobilov

export default App;

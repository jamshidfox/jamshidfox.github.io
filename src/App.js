import React from 'react';
import Routing from './route/Route';
import Navbar from './pages/Navbar/navbar';
import Sidebar from './pages/Sidebar/sidebar';
import { Row, Col } from 'reactstrap';
import Login from './pages/login/login';
import './App.css';
function App() {
  return (
    <div id="app-container">
      {/* <Row>
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
      </Row> */}
      <Login />
    </div>
    // <ValidationOnChange />
  );
}
// Jamshidbek Kobilov

export default App;

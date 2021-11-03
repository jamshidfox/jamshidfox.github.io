import React from 'react'
import Routing from "./route/Route"
import Navbar from './pages/Navbar/navbar'
import Sidebar from "./pages/Sidebar/sidebar"
import {Row, Col} from "reactstrap"


function App() {
return (
    <div>
      <Row>
          <Col sm = '12'>
            <Navbar/>
          </Col> 
      </Row>
        <Row>
            <Col sm = '10'>
                <Routing />
              </Col>
            <Col sm = '2'>
               <Sidebar />
            </Col>
      </Row>
      </div>
  // <ValidationOnChange />  
  
    );
   
}
// Jamshidbek Kobilov

export default App;

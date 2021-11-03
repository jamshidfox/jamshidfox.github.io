import React, { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import {Card, CardBody, Row, Form, Button, FormGroup, Input, Label} from 'reactstrap'
import { User } from 'react-feather';
import axios from 'axios';
const Login = () => {
    const [authetificationData, setauthetificationData] = useState()

    const handleLogin = () => {
        if(authetificationData === undefined){
            console.log('undefined')
        } else {
            axios.post('https://api.themoviedb.org/3/movie/76341?api_key=a06703a3a956c84f212f678361ef4431')
            .then((data) => console.log(data))
            console.log(authetificationData)
        }
    }


    const handleInputChange = (e) => {
         setauthetificationData ( {...authetificationData,[e.target.name]:e.target.value })
    }

    return ( 
        <div className = 'd-flex align-items-center justify-content-center' id = 'toby' style = {{height:'100vh', backgroundImage:""}}>
            <div className = 'd-flex flex-column justify-content-center align-items-center mt-5' id = 'cardLabel'>
                <User size = {60} className = 'text-light mb-4'/>
                <h3>Login Page</h3>
            </div>
                    <Card className = 'd-flex align-items-center mt-5 ml-5' id = 'cardId'>
                            <CardBody>
                                <Form className = 'mt-5'>
                                    <Row>
                                        <FormGroup>
                                                <Label for='firstName'>UserName</Label>
                                                <Input id='firstName' 
                                                type = 'text'
                                                name = 'name' 
                                                placeholder="Admin"
                                                onChange = {handleInputChange}
                                                />
                                            </FormGroup>
                                        </Row>
                                        
                                        <Row className = 'mt-3'>
                                                <FormGroup>
                                                    <Label for='password'>Password</Label>
                                                    <Input id='password'
                                                     type = 'text'
                                                     name = "password"
                                                     placeholder="Password"
                                                     onChange={handleInputChange}/>
                                                </FormGroup>
                                    </Row>
                                    <Row className = 'mt-4'>
                                        <FormGroup className= 'd-flex justify-content-center'>
                                            <Button name="Login" className = 'w-100' onClick={() => handleLogin()}>Login</Button>
                                            <Button name="Sign" className = 'w-100 btn btn-info'><Link to="signUp">Sign Up</Link></Button>

                                        </FormGroup>
                                    </Row>
                                </Form>
                            </CardBody>
                    </Card>
         </div>
     );
}
 
export default Login;
import {
    Input,
    Card, 
    CardBody, 
    Col, 
    Row, 
    Dropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem,
    Button
} 
from "reactstrap"


import { useEffect, useState } from "react"
import { Search, Music } from "react-feather"
import {Link} from "react-router-dom"
import axios from "axios"
const Sidebar = () => {
   const [dropdownOpenJanr, setDropdownOpen] = useState(false);
   const [dropdownOpenLenguage, setDropdownOpenLenguage] = useState(false);
   const [data, setData] = useState(0)
   const [searchedData, setsearchedData] = useState('')


   const toggle = () => setDropdownOpen(prevState => !prevState);
   const toggle2 = () => setDropdownOpenLenguage(prevState => !prevState);
   //////Axios get Data
   useEffect(() => {
    axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=a06703a3a956c84f212f678361ef4431&language=en-US")
    .then(data => setData(data))
    },[]);
    /////Events
    const handleSearch = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a06703a3a956c84f212f678361ef4431&language=en-US&include_adult=false&query=${searchedData}`)
        .then((data) => console.log(data.data))
    }
    const handleChangeInput = (e) => {
       const text = e.target.value
       setsearchedData(text)
    }
    
     if(data !== 0){
        return ( 
            <Card>
                <CardBody>
                    <Row>
                           <Col sm = '10'>
                               <Input type = "search" placeholder = "Поиск" value={searchedData} onChange={(e) => handleChangeInput(e)}/>
                           </Col>
                           <Col sm = "1">
                               <Search size = {12} onClick={() => handleSearch()} />
                           </Col>
                    </Row>
                    <Row>
                           <Col className = "mt-3">
                                  <Dropdown isOpen={dropdownOpenJanr} toggle={toggle} sm = '12'>
                                       <DropdownToggle caret>
                                                       <span > Жанры </span>     
                                        </DropdownToggle>
                                           <DropdownMenu style={{width:"260px"}}>
                                               <Row  xs="2">
                                               {data.data.genres.map((data) =>
                                                 <Col key = {data.id}>
                                                   <DropdownItem><Link to ={`${data.name.toLowerCase()}`}>{data.name}</Link></DropdownItem>
                                                   </Col>
                                                   )}
                                                   </Row>
                                           </DropdownMenu>
                                   </Dropdown>
                           </Col>
                           <Col className = "mt-3">
                                  <Dropdown isOpen={dropdownOpenLenguage} toggle={toggle2} sm = '12'>
                                       <DropdownToggle caret>
                                                       <span> Язык </span>     
                                        </DropdownToggle>
                                           <DropdownMenu >
                                                   <DropdownItem>Uzbek</DropdownItem>
                                                   <DropdownItem>Руский</DropdownItem>
                                                   <DropdownItem>English</DropdownItem>
                                                   <DropdownItem>Dutch</DropdownItem>
                                                   <DropdownItem>Turkca</DropdownItem>
                                           </DropdownMenu>
                                   </Dropdown>
                           </Col>
                    </Row>
                    <Row>
                        <Col sm = "12" className = "mt-3">
                           <Button className = "btn btn-warning w-100">Плейер <span><Music size = {12} /></span></Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        );
    } else {
        return 0
    }
   

}

export default Sidebar;
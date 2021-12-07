import { Input, Card, CardBody, Col, Row, DropdownItem, Button, Collapse } from 'reactstrap';

import { useEffect, useState } from 'react';
import { Search, Music } from 'react-feather';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './genres.css';
//redux
import store from '../../../redux/Store';

const Sidebar = () => {
  const [genresBtn, setGenresBtn] = useState(false);
  const [languagesBtn, setLanguagesBtn] = useState(false);
  const [data, setData] = useState(0);
  const [searchedData, setsearchedData] = useState('');

  const handleGenresBtn = () => {
    if (languagesBtn == true) {
      setLanguagesBtn(false);
    }
    setGenresBtn((prevState) => !prevState);
  };
  const handleLanguagesBtn = () => {
    if (genresBtn == true) {
      setGenresBtn(false);
    }
    setLanguagesBtn((prevState) => !prevState);
  };

  //////Axios get Data
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=a06703a3a956c84f212f678361ef4431&language=en-US'
      )
      .then((data) => setData(data));
  }, []);
  /////Events
  const handleSearch = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=a06703a3a956c84f212f678361ef4431&language=en-US&include_adult=false&query=${searchedData}`
      )
      .then((data) =>
        store.dispatch({
          type: 'search',
          payload: [data.data],
        })
      );
  };
  const handleChangeInput = (e) => {
    const text = e.target.value;
    setsearchedData(text);
  };

  if (data !== 0) {
    return (
      <Card id="sidebar-container">
        <CardBody>
          <Row>
            <Col sm="10">
              <Input
                type="search"
                placeholder="Поиск"
                value={searchedData}
                onChange={(e) => handleChangeInput(e)}
              />
            </Col>
            <Col sm="2" className="d-flex align-items-center">
              <Search id="searchButton" size={20} onClick={() => handleSearch()} />
            </Col>
          </Row>
          <Row>
            <Col className="mt-3">
              <div className="d-flex justify-content-between mt-1">
                <Button
                  color="primary"
                  onClick={() => handleGenresBtn()}
                  style={{ marginBottom: '1rem' }}
                >
                  Жанры
                </Button>
                <Button
                  color="primary"
                  onClick={() => handleLanguagesBtn()}
                  style={{ marginBottom: '1rem' }}
                >
                  Языки
                </Button>
              </div>
              <div>
                <Collapse isOpen={genresBtn}>
                  <Card>
                    <CardBody>
                      {' '}
                      <Row xs="2">
                        {data.data.genres.map((data) => (
                          <Col key={data.id}>
                            <DropdownItem>
                              <Link to={`${data.name.toLowerCase()}`}>{data.name}</Link>
                            </DropdownItem>
                          </Col>
                        ))}
                      </Row>
                    </CardBody>
                  </Card>
                </Collapse>
                <Collapse isOpen={languagesBtn}>
                  <Card>
                    <CardBody>
                      <Row xs="2">
                        <Col>
                          <Link>English</Link>
                          <Link>Russian</Link>
                          <Link>Uzbek</Link>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-3">
              <Button className="btn btn-warning w-100">
                Плейер{' '}
                <span>
                  <Music size={12} />
                </span>
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  } else {
    return 0;
  }
};

export default Sidebar;

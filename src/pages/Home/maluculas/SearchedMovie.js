import axios from 'axios';
import { useState, useEffect } from 'react';
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const Search = () => {
  const ImgUrl = 'https://image.tmdb.org/t/p/w500';
  const [searchData, SetSearchData] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=a06703a3a956c84f212f678361ef4431&language=en-US&page=1&include_adult=false&query=venom`
      )
      .then((data) => SetSearchData(data));
  }, []);
  console.log(searchData);
  return (
    <Row>
      {searchData.data.map((d) => (
        <Col sm="2" className="ml-2 mt-4" key="id">
          <Card style={{ borderRadius: '10px 8%' }} id="dsd">
            {/* <CardImg variant="top"  /> */}
            <CardBody>
              <CardTitle>Realese date</CardTitle>
              <CardText>Title</CardText>
              <CardText>Vote: VOte</CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Search;

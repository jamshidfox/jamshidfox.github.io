import { useEffect, useState } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, Row, Col } from 'reactstrap';
import CustomTable from './maluculas/test';
import axios from 'axios';
import store from '../../redux/Store';

const Home = () => {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=a06703a3a956c84f212f678361ef4431&language=en-US&page=${count}`
      )
      .then((data) => setData(data));
  }, [count]);
  const ImgUrl = 'https://image.tmdb.org/t/p/w500';
  console.log(store.getState());
  if (data) {
    return (
      <Row>
        {data.data.results.map((d) => (
          <Col sm="2" className="ml-2 mt-4" key={d.id}>
            <Card style={{ borderRadius: '10px 8%' }} id={d.id}>
              <CardImg variant="top" src={ImgUrl + d.poster_path} />
              <CardBody>
                <CardTitle>{d.release_date}</CardTitle>
                <CardText>{d.title}</CardText>
                <CardText>Vote: {d.vote_average}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
        <CustomTable changeCount={setCount} count={data.data.total_pages} />
      </Row>
    );
  } else {
    return (
      <div
        style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <h1
          style={{
            WebkitBoxShadow: '4px 8px 15px 11px rgba(34, 60, 80, 0.2)',
            MozBoxShadow: '4px 8px 15px 11px rgba(34, 60, 80, 0.2)',
            boxShadow: '4px 8px 15px 11px rgba(34, 60, 80, 0.2)',
          }}
        >
          404 Not Found
        </h1>
      </div>
    );
  }
};

export default Home;

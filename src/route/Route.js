/////Import Routes//////
import {
  Switch,
  Route,
  // Link
} from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import Home from '../pages/Home/home';
import Search from '../pages/Home/maluculas/SearchedMovie';

const Routing = () => {
  return (
    <Card
      className="mt-4"
      style={{ boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)' }}
    >
      <CardBody>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </Switch>
      </CardBody>
    </Card>
  );
};

export default Routing;

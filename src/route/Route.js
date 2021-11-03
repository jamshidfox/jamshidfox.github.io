
/////Import Routes//////
import {
  Switch,
  Route,
  // Link
} from "react-router-dom";
import {Card, CardBody} from "reactstrap";
import Home from "../pages/Home/home"
import Search from "../pages/Home/maluculas/SearchedMovie"

const Routing = () => {

    return ( 
        <Card className = "mt-4">
          <CardBody>
              <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/search">
                    <Search/>
                </Route>
              </Switch>
          </CardBody>
        </Card>
     ); 
    
}
 
export default Routing;
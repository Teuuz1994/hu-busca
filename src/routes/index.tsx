import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import UserDetails from '../pages/UserDetails';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={UserDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

import { Route, IndexRoute } from 'inferno-router';
import Home from './views/home';
import About from './views/about';

export default (
  <Route>
    <IndexRoute component={ Home }/>
    <Route path="/about" component={ About }/>
  </Route>
);
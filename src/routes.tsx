import { Route, IndexRoute } from 'inferno-router';
import Layout from './layout/Layout';
import Home from './views/home';
import About from './views/about';
import Product from './views/product';
import Service from './views/service';
import JoinUs from './views/joinUs';
import Contact from './views/contact';

export default (
  <Route component={ Layout }>
    <IndexRoute component={ Home }/>
    <Route path="/product" component={ Product }/>
    <Route path="/service" component={ Service }/>
    <Route path="/about" component={ About }/>
    <Route path="/joinus" component={ JoinUs }/>
    <Route path="/contact" component={ Contact }/>
  </Route>
);
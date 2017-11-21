import Component from 'inferno-component'
import { Router } from 'inferno-router'
import routes from './routes';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

export default class App extends Component<any, any> {
  render() {
    return <Router history={ browserHistory }>
      {routes}
    </Router>
  }
};
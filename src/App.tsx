import createBrowserHistory from 'history/createBrowserHistory';
import Component from 'inferno-component';
import { Router } from 'inferno-router';
import routes from './routes';

const browserHistory = createBrowserHistory();

export default class App extends Component<any, any> {
  public render() {
    return <Router history={ browserHistory } onUpdate={() => window.scrollTo(0, 0)} >
      {routes}
    </Router>;
  }
}
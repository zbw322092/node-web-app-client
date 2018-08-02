import 'babel-polyfill';
import Inferno from 'inferno';
import '../lib/dialog';
import '../lib/matchMedia';
import '../lib/pureCSS';
import App from './App';
import './styles';

const container = document.getElementById('app');

Inferno.render(<App></App>, container);

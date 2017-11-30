import Inferno from 'inferno';
import '../lib/matchMedia';
import '../lib/dialog';
import './styles';
import App from './App';

const container = document.getElementById('app');

Inferno.render(<App></App>, container)
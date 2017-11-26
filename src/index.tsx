import 'purecss/build/pure.css';
import Inferno from 'inferno';
import './styles';
import App from './App';

const container = document.getElementById('app');

Inferno.render(<App></App>, container)
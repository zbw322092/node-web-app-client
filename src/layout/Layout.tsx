import Header from '../components/Header/index';
import Footer from '../components/Footer/index';

export default function({ children }) {
  return <div>
      <Header/>
      <main className="wrapper">
        { children }
      </main>
      <Footer/>
    </div>
};
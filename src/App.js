import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

export default function App() {
  return (
    <div className="App">
          <Header text='salam bro' color='red'/>
          <Main/>
          <Footer btn/>
    </div>
  );
}
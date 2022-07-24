import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainContents from './Components/Main/MainComponents';

function App() {
  return (
    <div className="App">
         <Header/> 
        <MainContents/>
        <Footer/>
    </div>
  );
}

export default App;

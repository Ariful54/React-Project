// import './App.css';
import Header from './MyComponents/Header.js';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';

 function App() {
  return (
    <div className="App">
      <> 
        <Header title="Lpogo 26" searchBar={false}/>
        <Todos/>
        <Footer/>
      </>
    </div>
  );
}
export default App;
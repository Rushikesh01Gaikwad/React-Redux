import './App.css';
import Navbar from './header/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <button className="btn btn-primary mx-2 ">+</button>
      Add to cart
      <button className="btn btn-primary mx-2 ">-</button>
    </div>
  );
}

export default App;

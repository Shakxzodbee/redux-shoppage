import './App.css';
import Cart from './components/Cart';
import ItemList from './components/ItemList';
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux';


function App() {
  const toggle = useSelector((state) => state.toggler.isShowCart)
  console.log(toggle)
  return (
    <div className="App">
      <Navbar/>
      <div className='main'>
        {toggle && <Cart/> }
      
      <h3 className='title'>Buy your favourite Product</h3>
      <ItemList/>
      </div>
    </div>
  );
}

export default App;
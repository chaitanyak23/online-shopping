import { Route,Routes } from 'react-router-dom';
import './App.css';
import Product from './pages/Product';
import Aboutus from './pages/Aboutus';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Cart from './pages/Cart';
import Contactus from './pages/Contactus';
import Orderconform from './pages/Orderconform';
import Placeorder from './pages/Placeorder';
import Productlist from './pages/Productlist';
const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Productlist/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Products/:id" element={<Product/>}/>
      <Route path="/About" element={<Aboutus/>}/>
      <Route path="/Contact" element={<Contactus/>}/>
      <Route path="/Placeorder" element={<Placeorder/>}/>
      <Route path="/Conformorder" element={<Orderconform/>}/>

    </Routes>
  );
}
export default App;
